require 'test_helper'

class Api::V1::TickersControllerTest < ActionDispatch::IntegrationTest
  test 'should get success response' do
    get api_v1_ticker_url({ q: 'aapl' })
    assert_response :success
  end

  test 'should return no ticker found' do
    get api_v1_ticker_url({ q: 'not_exist' })
    assert_response :not_found
  end

  test 'should return bad request if no params were passed' do
    get api_v1_ticker_url()
    assert_response :bad_request
  end
end
