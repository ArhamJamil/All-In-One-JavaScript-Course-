/*
    Pyramid of DOOM or CAllback hell:
        when we have calback inside the callback the code get difficult to manage

        loadScript(...){
            loadScript(...){
                loadScript(...){
                    loadScript(...){

                    }
                }
            }
        }

        As call become more nested the code becomes deeper and increasingly more difficult to manage 
        especially if we have real code instead of ...
        The pyramid of these calls grows toward the right
*/

// CallBacks:

const loadScript = (src, callback) => {
  let newScript = document.createElement("script");
  newScript.src = src;
  newScript.onload = function () {
    console.log("script loaded = '" + src + "'");
    callback(null, src);
  };
  newScript.onerror = function () {
    console.log("Script not loaded" + src);
    callback(new Error("src got some error while loading ..."));
  };

  document.body.append(newScript);
};

loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
  function cb(error, x) {
    if (error) {
      console.log(error);
      sendEmergencyMessagetoCEO(); // method
      return;
    }
    loadScript(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
      function cb(error, x) {
        if (error) {
          console.log(error);
          sendEmergencyMessagetoCEO(); // method
          return;
        }
        loadScript(
          "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
          function cb(error, x) {
            if (error) {
              console.log(error);
              sendEmergencyMessagetoCEO(); // method
              return;
            }
            loadScript(
              "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
              function cb(error, x) {
                if (error) {
                  console.log(error);
                  sendEmergencyMessagetoCEO(); // method
                  return;
                }
                loadScript(
                  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
                  function cb(error, x) {
                    if (error) {
                      console.log(error);
                      sendEmergencyMessagetoCEO(); // method
                      return;
                    }
                    loadScript(
                      "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
                      function cb(error, x) {
                        if (error) {
                          console.log(error);
                          sendEmergencyMessagetoCEO(); // method
                          return;
                        }
                        loadScript(
                          "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
                          function cb(error, x) {
                            if (error) {
                              console.log(error);
                              sendEmergencyMessagetoCEO(); // method
                              return;
                            }
                            loadScript(
                              "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
                              function cb(error, x) {
                                if (error) {
                                  console.log(error);
                                  sendEmergencyMessagetoCEO(); // method
                                  return;
                                }
                                loadScript(
                                  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
                                  function cb(error, x) {
                                    if (error) {
                                      console.log(error);
                                      sendEmergencyMessagetoCEO(); // method
                                      return;
                                    }
                                    loadScript(
                                      "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
                                    );
                                  }
                                );
                              }
                            );
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  }
);
