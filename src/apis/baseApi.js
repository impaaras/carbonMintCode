import axios from 'axios';
import {handleFetchError} from '../utilityFunctions/utilityFunctions';

const getOptions = (data = {}) => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', 'Bearer token');

  var raw = JSON.stringify(data);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };
  return requestOptions;
};

export const getOffsetTipsApi = async (fields = {}) => {
  return new Promise((resolve, reject) => {
    var requestOptions = getOptions(fields);
    fetch('https://api.temp.world/tips/', requestOptions)
      .then(response => response.text())
      .then(result => resolve(result))
      .catch(error => {
        resolve(null);
        handleFetchError(error, 'offset Tips Error');
      });
  });
};

export const processChatMessage = async (fields = {}) => {
  return new Promise((resolve, reject) => {
    var requestOptions = getOptions(fields);
    fetch('https://api.temp.world/ask', requestOptions)
      .then(response => response.text())
      .then(result => resolve(result))
      .catch(error => {
        resolve(null);
        handleFetchError(error, 'chat api error');
      });
  });

  // fetch("http://13.232.32.239:8000/health", {method:'GET'}).then(resp=>resp.json()).then((data)=>{
  //   console.log(data)
  // })

  // const myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/json");

  // const raw = JSON.stringify({
  //   "query": "do i have a car",
  //   "userdetails": {}
  // });

  // const requestOptions = {
  //   method: "GET",
  //   headers: myHeaders,
  //   // body: raw,
  //   redirect: "follow"
  // };

  // fetch("https://cc40-13-232-32-239.ngrok-free.app/health",)
  //   .then((response) => response.text())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.error(error));
};

// func request(method: HTTPMethod, URLString: String, parameters: Parameters?, encoding: ParameterEncoding, headers: HTTPHeaders, showLoader: Bool = true, completionHandler: @escaping (_ success: Bool, [String: AnyObject]?, NSError?) -> Void) {
//   if showLoader {
//       Indicator.instance.show(loadingText: "")
//   }
//   if Reachability.isConnectedToNetwork() {
//       DispatchQueue.main.async {
//           let kApiURL = isDebug ? (baseDevApiUrl + URLString) : (baseProductionApiURl + URLString)
//           debugPrint("Hit \(kApiURL) with headers \(headers) and Params \(String(describing: parameters))")
//           AF.request(kApiURL, method: method, parameters: parameters, encoding: encoding, headers: headers)
//               .response(completionHandler: { (response) in
//                   Indicator.instance.hide()
//                   debugPrint(response)
//                   do {
//                       if response.error == nil {
//                           if let jsonResult = try JSONSerialization.jsonObject(with: response.data!, options: []) as? [String: AnyObject] {
//                               completionHandler(true, jsonResult, nil)
//                           } else {
//                               completionHandler(false, nil, CustomError.someThingWrong as NSError)
//                           }
//                       } else {
//                           debugPrint("response.error?.responseCode \(response.error?.localizedDescription)")
//                           if response.error?.localizedDescription == "URLSessionTask failed with error: The network connection was lost." {
//                               debugPrint("app goes to background when api hitted")
//                           } else {
//                               completionHandler(false, nil, response.error! as NSError)
//                           }
//                       }
//                   } catch let error as NSError {
//                       if error.localizedDescription == "URLSessionTask failed with error: The network connection was lost." {
//                           debugPrint("app goes to background when api hitted")
//                       } else {
//                           completionHandler(false, nil, error)
//                       }

//                   }
//               })
//       }
//   } else {
//       Indicator().hide()
//       completionHandler(false, nil, CustomError.noNetwork as NSError)
//   }
// }

// const axios = require('axios');

// function request(method, URLString, parameters, encoding, headers, showLoader = true, completionHandler) {

//     if (true /* You need to implement Reachability.isConnectedToNetwork() */) {
//         const baseURL = isDebug ? baseDevApiUrl : baseProductionApiURl;
//         const apiURL = `${baseURL}${URLString}`;
//         console.log(`Hit ${apiURL} with headers ${JSON.stringify(headers)} and Params ${JSON.stringify(parameters)}`);
//         axios.request({
//             method: method.toLowerCase(),
//             url: apiURL,
//             params: parameters,
//             headers: headers
//         }).then(response => {
//             // You need to implement Indicator hide method here
//             console.log(response);
//             try {
//                 if (!response.error) {
//                     completionHandler(true, response.data, null);
//                 } else {
//                     console.log(`response.error?.responseCode ${response.error}`);
//                     if (response.error === "URLSessionTask failed with error: The network connection was lost.") {
//                         console.log("app goes to background when api hitted");
//                     } else {
//                         completionHandler(false, null, new Error(response.error));
//                     }
//                 }
//             } catch (error) {
//                 if (error.message === "URLSessionTask failed with error: The network connection was lost.") {
//                     console.log("app goes to background when api hitted");
//                 } else {
//                     completionHandler(false, null, error);
//                 }
//             }
//         }).catch(error => {
//             console.error(error);
//             completionHandler(false, null, error);
//         });
//     } else {
//         // You need to implement Indicator hide method here
//         completionHandler(false, null, new Error("CustomError.noNetwork"));
//     }
// }

// Usage example:
// request( { param1: 'value1', param2: 'value2' }, { 'Authorization': 'Bearer token' },(success, data, error) => {
//     if (success) {
//         console.log('Request succeeded:', data);
//     } else {
//         console.error('Request failed:', error);
//     }
// });

// function request( parameters, headers, completionHandler) {

//   if (true ) {
//     setTimeout(() => {
//       let kApiURL = "http://13.232.32.239:8000/ask";

//       fetch(kApiURL, {
//         method: 'POST',
//         body: parameters,
//         headers: headers
//       })
//       .then(response => {

//         console.log(response);
//         if (!response.ok) {
//           throw new Error('Network response was not ok.');
//         }
//         return response.json();
//       })
//       .then(jsonResult => {
//         completionHandler(true, jsonResult, null);
//       })
//       .catch(error => {
//         console.error('Fetch error:', error);
//         completionHandler(false, null, error);
//       });
//     }, 0);
//   }

// }
