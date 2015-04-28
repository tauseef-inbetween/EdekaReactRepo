/*************************************************************************************************/
// Wrapper methods for request to server via Ajax.
/*************************************************************************************************/

$(document).on({
                 ajaxStart: function () {
                   //showLoadingScreen();
                 },
                 ajaxStop: function () {
                   //hideLoadingScreen();
                 }
               });

/**
 * Forwards a call to the server via GET.
 *
 * @param {String}    sUrl          The url to which the call should be forwarded.
 * @param {Boolean}   bAsync        true, if the call should be executed asynchronously,
 *                                  otherwise false.
 * @param {Function}  oCallback     A method that should be called after the request has
 *                                  finished.
 * @param {object}    oCallbackData An object that is passed to the callback method.
 *
 * @param {object}    oGetParams    An object that is passed to the server call.
 *
 * @return {object}                  In case of an synchronous request the result is
 *                                  returned, otherwise void.
 * @access public
 */
processGetRequest = function (sUrl, bAsync, oGetParams, oCallback, oCallbackData) {

  var oRequest = $.ajax({
                          url: sUrl,
                          type: "GET",
                          data: oGetParams,
                          dataType: "json",
                          async: bAsync,
                          success: function (mResult) {
                            if (oCallback) {
                              oCallback(mResult, oCallbackData);
                            } else {

                              return mResult;
                            }
                          },
                          error: function (mError) {
                            if (oCallback) {
                              oCallback(mError, oCallbackData);
                            } else {

                              return mError;
                            }
                          }
                        });

  if (!oCallback && !bAsync) {

    return oRequest.responseJSON ? oRequest.responseJSON : oRequest.responseText;
  }
};


/**
 * Forwards a call to the server via POST.
 *
 * @param {String}    sUrl          The url to which the call should be forwarded.
 * @param {Boolean}   bAsync        true, if the call should be executed asynchronously,
 *                                  otherwise false.
 * @param {Function}  oCallback     A method that should be called after the request has
 *                                  finished.
 * @param {object}    oCallbackData An object that is passed to the callback method.
 *
 * @param {object}    oPostParams    An object that is passed to the server call.
 *
 * @return {object}                  In case of an synchronous request the result is
 *                                  returned, otherwise void.
 * @access public
 */
processPostRequest = function (sUrl, bAsync, oPostParams, oCallback, oCallbackData) {

  var oRequest = $.ajax({
                          url: sUrl,
                          type: "POST",
                          data: JSON.stringify(oPostParams),
                          contentType: "application/json; charset=utf-8",
                          dataType: "json",
                          async: bAsync,
                          success: function (mResult) {
                            if (oCallback) {
                              oCallback(mResult, oCallbackData);
                            } else {

                              return mResult;
                            }
                          },
                          error: function (mError) {
                            if (oCallback) {
                              oCallback(mError);
                            } else {

                              return mError;
                            }
                          }
                        });

  if (!oCallback && !bAsync) {

    return oRequest.responseJSON ? oRequest.responseJSON : oRequest.responseText;
  }

};

/**
 * Shows the loading screen for the application context covering the complete
 * screen.
 *
 * @return void
 * @access public
 */
showLoadingScreen = function () {
  $('#loader').show().css('opacity','1');
  
};

/**
 * Hides the loading screen for the application context. This method has to
 * be called the same number of times like "showLoadingScreen", otherwise the
 * whole screen remains covered by the loading screen.
 *
 * @return void
 * @access public
 */
hideLoadingScreen = function () {

};

forwardRequest = function(sUrl, bAsync, oDataParams, aURLParams, sRequestType, oCallback, mCallbackData){

  if(aURLParams != null){
    sUrl = sUrl + '/' + aURLParams.join('/');
  }
  if(sRequestType == 'POST'){

    processPostRequest(sUrl,bAsync, oDataParams, oCallback, mCallbackData);
  } else if(sRequestType == 'GET'){

    processGetRequest(sUrl,bAsync, oDataParams, oCallback, mCallbackData);
  }
};
