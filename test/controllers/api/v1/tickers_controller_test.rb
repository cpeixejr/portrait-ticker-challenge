require "test_helper"

class Api::V1::TickersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_tickers_index_url
    assert_response :success
  end
end
