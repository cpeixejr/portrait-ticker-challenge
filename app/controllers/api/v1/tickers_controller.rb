class Api::V1::TickersController < ApplicationController
  def search
    return unless params[:q].present?

    ticker = params[:q].upcase

    api_key = Rails.application.credentials.api_key
    url = "https://api.polygon.io/v2/aggs/ticker/#{ticker}/range/1/day/2023-01-01/2023-12-31?apiKey=#{api_key}"
    uri = URI.parse(url)
    req = Net::HTTP::Get.new(uri)

    res = Net::HTTP.start(uri.hostname, uri.port, :use_ssl => uri.scheme == 'https') {|http|
      http.request(req)
    }

    body = JSON.parse(res.body)
    results = body["results"]

    return unless results

    prices = results.map{|p| p["c"]}
    volumes = results.map{|v| v["v"]}

    @ticker = {
      name: body["ticker"],
      min_price: prices.min,
      max_price: prices.max,
      avg_price: prices.inject(0.0) { |sum, el| sum + el } / prices.size,
      min_volume: volumes.min,
      max_volume: volumes.max,
      avg_volume: volumes.inject(0.0) { |sum, el| sum + el } / volumes.size,
    }

    render json: @ticker
  end
end
