require "test_helper"

class Api::V1::TickersControllerTest < ActionDispatch::IntegrationTest
  test "should get success response" do
    get api_v1_ticker_url("aapl")
    assert_response :success
  end
end
