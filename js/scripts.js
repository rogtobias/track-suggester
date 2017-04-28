$(document).ready(function() {
  //front end logic
  $("#formOne").submit(function(event) {
    var userInput = $("input#user").val();
    var peoplePerson = $("#peoplePerson").val();
    var personalityType = $("#personalityType").val();
    var corporations = $("#corporations").val();
    var popular = $("#popular").val();
    var appType = $("#appType").val();
    

    //back end logic
    if (personalityType === "realistic") {
      if (peoplePerson === "yesPeople") {
        if (corporations === "bigCorp") {
          if (popular === "popular") {
            if (appType === "website") {
              $(".recommend1").empty().append("Design");
              $(".recommend2").empty().append("Java");
              $(".recommend3").empty().append("PHP");
            } else {
              $(".recommend1").empty().append("Java");
              $(".recommend2").empty().append("C#");
              $(".recommend3").empty().append("CSS");
            }
          } else {
            if (appType === "website") {
              $(".recommend1").empty().append("PHP");
              $(".recommend2").empty().append("CSS");
              $(".recommend3").empty().append("Ruby");
            } else {
              $(".recommend1").empty().append("C#");
              $(".recommend2").empty().append("Design");
              $(".recommend3").empty().append("PHP");
            }
          }
        } else {
          if (popular === "popular") {
            if (appType === "website") {
              $(".recommend1").empty().append("Design");
              $(".recommend2").empty().append("Java");
              $(".recommend3").empty().append("PHP");
            } else {
              $(".recommend1").empty().append("Java");
              $(".recommend2").empty().append("C#");
              $(".recommend3").empty().append("CSS");
            }
          } else {
            if (appType === "website") {
              $(".recommend1").empty().append("PHP");
              $(".recommend2").empty().append("CSS");
              $(".recommend3").empty().append("Ruby");
            } else {
              $(".recommend1").empty().append("C#");
              $(".recommend2").empty().append("Design");
              $(".recommend3").empty().append("PHP");
            }
          }
        }
      } else {
        if (corporations === "bigCorp") {
          if (popular === "popular") {
            if (appType === "website") {
              $(".recommend1").empty().append("Design");
              $(".recommend2").empty().append("Java");
              $(".recommend3").empty().append("PHP");
            } else {
              $(".recommend1").empty().append("Java");
              $(".recommend2").empty().append("C#");
              $(".recommend3").empty().append("CSS");
            }
          } else {
            if (appType === "website") {
              $(".recommend1").empty().append("PHP");
              $(".recommend2").empty().append("CSS");
              $(".recommend3").empty().append("Ruby");
            } else {
              $(".recommend1").empty().append("C#");
              $(".recommend2").empty().append("Design");
              $(".recommend3").empty().append("PHP");
            }
          }
        } else {
          if (popular === "popular") {
            if (appType === "website") {
              $(".recommend1").empty().append("Design");
              $(".recommend2").empty().append("Java");
              $(".recommend3").empty().append("PHP");
            } else {
              $(".recommend1").empty().append("Java");
              $(".recommend2").empty().append("C#");
              $(".recommend3").empty().append("CSS");
            }
          } else {
            if (appType === "website") {
              $(".recommend1").empty().append("PHP");
              $(".recommend2").empty().append("CSS");
              $(".recommend3").empty().append("Ruby");
            } else {
              $(".recommend1").empty().append("C#");
              $(".recommend2").empty().append("Design");
              $(".recommend3").empty().append("PHP");
            }
          }
        }
      }
    }
    else if (personalityType === "investigative") {
      if (peoplePerson === "yesPeople") {
        if (corporations === "bigCorp") {
          if (popular === "popular") {
            if (appType === "website") {
              $(".recommend1").empty().append("Design");
              $(".recommend2").empty().append("Java");
              $(".recommend3").empty().append("PHP");
            } else {
              $(".recommend1").empty().append("Java");
              $(".recommend2").empty().append("C#");
              $(".recommend3").empty().append("CSS");
            }
          } else {
            if (appType === "website") {
              $(".recommend1").empty().append("PHP");
              $(".recommend2").empty().append("CSS");
              $(".recommend3").empty().append("Ruby");
            } else {
              $(".recommend1").empty().append("C#");
              $(".recommend2").empty().append("Design");
              $(".recommend3").empty().append("PHP");
            }
          }
        } else {
          if (popular === "popular") {
            if (appType === "website") {
              $(".recommend1").empty().append("Design");
              $(".recommend2").empty().append("Java");
              $(".recommend3").empty().append("PHP");
            } else {
              $(".recommend1").empty().append("Java");
              $(".recommend2").empty().append("C#");
              $(".recommend3").empty().append("CSS");
            }
          } else {
            if (appType === "website") {
              $(".recommend1").empty().append("PHP");
              $(".recommend2").empty().append("CSS");
              $(".recommend3").empty().append("Ruby");
            } else {
              $(".recommend1").empty().append("C#");
              $(".recommend2").empty().append("Design");
              $(".recommend3").empty().append("PHP");
            }
          }
        }
      } else {
        if (corporations === "bigCorp") {
          if (popular === "popular") {
            if (appType === "website") {
              $(".recommend1").empty().append("Design");
              $(".recommend2").empty().append("Java");
              $(".recommend3").empty().append("PHP");
            } else {
              $(".recommend1").empty().append("Java");
              $(".recommend2").empty().append("C#");
              $(".recommend3").empty().append("CSS");
            }
          } else {
            if (appType === "website") {
              $(".recommend1").empty().append("PHP");
              $(".recommend2").empty().append("CSS");
              $(".recommend3").empty().append("Ruby");
            } else {
              $(".recommend1").empty().append("C#");
              $(".recommend2").empty().append("Design");
              $(".recommend3").empty().append("PHP");
            }
          }
        } else {
          if (popular === "popular") {
            if (appType === "website") {
              $(".recommend1").empty().append("Design");
              $(".recommend2").empty().append("Java");
              $(".recommend3").empty().append("PHP");
            } else {
              $(".recommend1").empty().append("Java");
              $(".recommend2").empty().append("C#");
              $(".recommend3").empty().append("CSS");
            }
          } else {
            if (appType === "website") {
              $(".recommend1").empty().append("PHP");
              $(".recommend2").empty().append("CSS");
              $(".recommend3").empty().append("Ruby");
            } else {
              $(".recommend1").empty().append("C#");
              $(".recommend2").empty().append("Design");
              $(".recommend3").empty().append("PHP");
            }
          }
        }
      }
    }
    else if (personalityType === "artistic") {
      if (peoplePerson === "yesPeople") {
        if (corporations === "bigCorp") {
          if (popular === "popular") {
            if (appType === "website") {
              $(".recommend1").empty().append("Design");
              $(".recommend2").empty().append("Java");
              $(".recommend3").empty().append("PHP");
            } else {
              $(".recommend1").empty().append("Java");
              $(".recommend2").empty().append("C#");
              $(".recommend3").empty().append("CSS");
            }
          } else {
            if (appType === "website") {
              $(".recommend1").empty().append("PHP");
              $(".recommend2").empty().append("CSS");
              $(".recommend3").empty().append("Ruby");
            } else {
              $(".recommend1").empty().append("C#");
              $(".recommend2").empty().append("Design");
              $(".recommend3").empty().append("PHP");
            }
          }
        } else {
          if (popular === "popular") {
            if (appType === "website") {
              $(".recommend1").empty().append("Design");
              $(".recommend2").empty().append("Java");
              $(".recommend3").empty().append("PHP");
            } else {
              $(".recommend1").empty().append("Java");
              $(".recommend2").empty().append("C#");
              $(".recommend3").empty().append("CSS");
            }
          } else {
            if (appType === "website") {
              $(".recommend1").empty().append("PHP");
              $(".recommend2").empty().append("CSS");
              $(".recommend3").empty().append("Ruby");
            } else {
              $(".recommend1").empty().append("C#");
              $(".recommend2").empty().append("Design");
              $(".recommend3").empty().append("PHP");
            }
          }
        }
      } else {
        if (corporations === "bigCorp") {
          if (popular === "popular") {
            if (appType === "website") {
              $(".recommend1").empty().append("Design");
              $(".recommend2").empty().append("Java");
              $(".recommend3").empty().append("PHP");
            } else {
              $(".recommend1").empty().append("Java");
              $(".recommend2").empty().append("C#");
              $(".recommend3").empty().append("CSS");
            }
          } else {
            if (appType === "website") {
              $(".recommend1").empty().append("PHP");
              $(".recommend2").empty().append("CSS");
              $(".recommend3").empty().append("Ruby");
            } else {
              $(".recommend1").empty().append("C#");
              $(".recommend2").empty().append("Design");
              $(".recommend3").empty().append("PHP");
            }
          }
        } else {
          if (popular === "popular") {
            if (appType === "website") {
              $(".recommend1").empty().append("Design");
              $(".recommend2").empty().append("Java");
              $(".recommend3").empty().append("PHP");
            } else {
              $(".recommend1").empty().append("Java");
              $(".recommend2").empty().append("C#");
              $(".recommend3").empty().append("CSS");
            }
          } else {
            if (appType === "website") {
              $(".recommend1").empty().append("PHP");
              $(".recommend2").empty().append("CSS");
              $(".recommend3").empty().append("Ruby");
            } else {
              $(".recommend1").empty().append("C#");
              $(".recommend2").empty().append("Design");
              $(".recommend3").empty().append("PHP");
            }
          }
        }
      }
    }
    else if (personalityType === "social") {
      if (peoplePerson === "yesPeople") {
        if (corporations === "bigCorp") {
          if (popular === "popular") {
            if (appType === "website") {
              $(".recommend1").empty().append("Design");
              $(".recommend2").empty().append("Java");
              $(".recommend3").empty().append("PHP");
            } else {
              $(".recommend1").empty().append("Java");
              $(".recommend2").empty().append("C#");
              $(".recommend3").empty().append("CSS");
            }
          } else {
            if (appType === "website") {
              $(".recommend1").empty().append("PHP");
              $(".recommend2").empty().append("CSS");
              $(".recommend3").empty().append("Ruby");
            } else {
              $(".recommend1").empty().append("C#");
              $(".recommend2").empty().append("Design");
              $(".recommend3").empty().append("PHP");
            }
          }
        } else {
          if (popular === "popular") {
            if (appType === "website") {
              $(".recommend1").empty().append("Design");
              $(".recommend2").empty().append("Java");
              $(".recommend3").empty().append("PHP");
            } else {
              $(".recommend1").empty().append("Java");
              $(".recommend2").empty().append("C#");
              $(".recommend3").empty().append("CSS");
            }
          } else {
            if (appType === "website") {
              $(".recommend1").empty().append("PHP");
              $(".recommend2").empty().append("CSS");
              $(".recommend3").empty().append("Ruby");
            } else {
              $(".recommend1").empty().append("C#");
              $(".recommend2").empty().append("Design");
              $(".recommend3").empty().append("PHP");
            }
          }
        }
      } else {
        if (corporations === "bigCorp") {
          if (popular === "popular") {
            if (appType === "website") {
              $(".recommend1").empty().append("Design");
              $(".recommend2").empty().append("Java");
              $(".recommend3").empty().append("PHP");
            } else {
              $(".recommend1").empty().append("Java");
              $(".recommend2").empty().append("C#");
              $(".recommend3").empty().append("CSS");
            }
          } else {
            if (appType === "website") {
              $(".recommend1").empty().append("PHP");
              $(".recommend2").empty().append("CSS");
              $(".recommend3").empty().append("Ruby");
            } else {
              $(".recommend1").empty().append("C#");
              $(".recommend2").empty().append("Design");
              $(".recommend3").empty().append("PHP");
            }
          }
        } else {
          if (popular === "popular") {
            if (appType === "website") {
              $(".recommend1").empty().append("Design");
              $(".recommend2").empty().append("Java");
              $(".recommend3").empty().append("PHP");
            } else {
              $(".recommend1").empty().append("Java");
              $(".recommend2").empty().append("C#");
              $(".recommend3").empty().append("CSS");
            }
          } else {
            if (appType === "website") {
              $(".recommend1").empty().append("PHP");
              $(".recommend2").empty().append("CSS");
              $(".recommend3").empty().append("Ruby");
            } else {
              $(".recommend1").empty().append("C#");
              $(".recommend2").empty().append("Design");
              $(".recommend3").empty().append("PHP");
            }
          }
        }
      }
    }
    else if (personalityType === "enterprising") {
      if (peoplePerson === "yesPeople") {
        if (corporations === "bigCorp") {
          if (popular === "popular") {
            if (appType === "website") {
              $(".recommend1").empty().append("Design");
              $(".recommend2").empty().append("Java");
              $(".recommend3").empty().append("PHP");
            } else {
              $(".recommend1").empty().append("Java");
              $(".recommend2").empty().append("C#");
              $(".recommend3").empty().append("CSS");
            }
          } else {
            if (appType === "website") {
              $(".recommend1").empty().append("PHP");
              $(".recommend2").empty().append("CSS");
              $(".recommend3").empty().append("Ruby");
            } else {
              $(".recommend1").empty().append("C#");
              $(".recommend2").empty().append("Design");
              $(".recommend3").empty().append("PHP");
            }
          }
        } else {
          if (popular === "popular") {
            if (appType === "website") {
              $(".recommend1").empty().append("Design");
              $(".recommend2").empty().append("Java");
              $(".recommend3").empty().append("PHP");
            } else {
              $(".recommend1").empty().append("Java");
              $(".recommend2").empty().append("C#");
              $(".recommend3").empty().append("CSS");
            }
          } else {
            if (appType === "website") {
              $(".recommend1").empty().append("PHP");
              $(".recommend2").empty().append("CSS");
              $(".recommend3").empty().append("Ruby");
            } else {
              $(".recommend1").empty().append("C#");
              $(".recommend2").empty().append("Design");
              $(".recommend3").empty().append("PHP");
            }
          }
        }
      } else {
        if (corporations === "bigCorp") {
          if (popular === "popular") {
            if (appType === "website") {
              $(".recommend1").empty().append("Design");
              $(".recommend2").empty().append("Java");
              $(".recommend3").empty().append("PHP");
            } else {
              $(".recommend1").empty().append("Java");
              $(".recommend2").empty().append("C#");
              $(".recommend3").empty().append("CSS");
            }
          } else {
            if (appType === "website") {
              $(".recommend1").empty().append("PHP");
              $(".recommend2").empty().append("CSS");
              $(".recommend3").empty().append("Ruby");
            } else {
              $(".recommend1").empty().append("C#");
              $(".recommend2").empty().append("Design");
              $(".recommend3").empty().append("PHP");
            }
          }
        } else {
          if (popular === "popular") {
            if (appType === "website") {
              $(".recommend1").empty().append("Design");
              $(".recommend2").empty().append("Java");
              $(".recommend3").empty().append("PHP");
            } else {
              $(".recommend1").empty().append("Java");
              $(".recommend2").empty().append("C#");
              $(".recommend3").empty().append("CSS");
            }
          } else {
            if (appType === "website") {
              $(".recommend1").empty().append("PHP");
              $(".recommend2").empty().append("CSS");
              $(".recommend3").empty().append("Ruby");
            } else {
              $(".recommend1").empty().append("C#");
              $(".recommend2").empty().append("Design");
              $(".recommend3").empty().append("PHP");
            }
          }
        }
      }
    }
    else {
      if (peoplePerson === "yesPeople") {
        if (corporations === "bigCorp") {
          if (popular === "popular") {
            if (appType === "website") {
              $(".recommend1").empty().append("Design");
              $(".recommend2").empty().append("Java");
              $(".recommend3").empty().append("PHP");
            } else {
              $(".recommend1").empty().append("Java");
              $(".recommend2").empty().append("C#");
              $(".recommend3").empty().append("CSS");
            }
          } else {
            if (appType === "website") {
              $(".recommend1").empty().append("PHP");
              $(".recommend2").empty().append("CSS");
              $(".recommend3").empty().append("Ruby");
            } else {
              $(".recommend1").empty().append("C#");
              $(".recommend2").empty().append("Design");
              $(".recommend3").empty().append("PHP");
            }
          }
        } else {
          if (popular === "popular") {
            if (appType === "website") {
              $(".recommend1").empty().append("Design");
              $(".recommend2").empty().append("Java");
              $(".recommend3").empty().append("PHP");
            } else {
              $(".recommend1").empty().append("Java");
              $(".recommend2").empty().append("C#");
              $(".recommend3").empty().append("CSS");
            }
          } else {
            if (appType === "website") {
              $(".recommend1").empty().append("PHP");
              $(".recommend2").empty().append("CSS");
              $(".recommend3").empty().append("Ruby");
            } else {
              $(".recommend1").empty().append("C#");
              $(".recommend2").empty().append("Design");
              $(".recommend3").empty().append("PHP");
            }
          }
        }
      } else {
        if (corporations === "bigCorp") {
          if (popular === "popular") {
            if (appType === "website") {
              $(".recommend1").empty().append("Design");
              $(".recommend2").empty().append("Java");
              $(".recommend3").empty().append("PHP");
            } else {
              $(".recommend1").empty().append("Java");
              $(".recommend2").empty().append("C#");
              $(".recommend3").empty().append("CSS");
            }
          } else {
            if (appType === "website") {
              $(".recommend1").empty().append("PHP");
              $(".recommend2").empty().append("CSS");
              $(".recommend3").empty().append("Ruby");
            } else {
              $(".recommend1").empty().append("C#");
              $(".recommend2").empty().append("Design");
              $(".recommend3").empty().append("PHP");
            }
          }
        } else {
          if (popular === "popular") {
            if (appType === "website") {
              $(".recommend1").empty().append("Design");
              $(".recommend2").empty().append("Java");
              $(".recommend3").empty().append("PHP");
            } else {
              $(".recommend1").empty().append("Java");
              $(".recommend2").empty().append("C#");
              $(".recommend3").empty().append("CSS");
            }
          } else {
            if (appType === "website") {
              $(".recommend1").empty().append("PHP");
              $(".recommend2").empty().append("CSS");
              $(".recommend3").empty().append("Ruby");
            } else {
              $(".recommend1").empty().append("C#");
              $(".recommend2").empty().append("Design");
              $(".recommend3").empty().append("PHP");
            }
          }
        }
      }
    }

    $(".user").append(userInput);

    $("#recommendationStory").show();

    event.preventDefault();
  });
});
