var AppForm = null;
var socket = io.connect();

function ngMain()
{
  AppForm = new ngControls({
    wePages1: {
      Type: 'wePages',
      L: 0,
      T: 0,
      R: 0,
      B: 0,
      Data: {
        HTMLEncode: true,
        Page: 0
      },
      Pages: [
        {
          Text: 'Sign in',
          Controls: {
            tfID: {
              Type: 'weEdit',
              L: 20,
              T: 28,
              W: 220,
              Data: { Text: '900' }
            },
            btSignIn: {
              Type: 'weButton',
              L: 80,
              T: 88,
              Data: {
                HTMLEncode: true,
                Text: 'Sign In'
              },
              Events: {
                OnClick: function (e) {
                  socket.emit('login', { id: AppForm.tfID.Text });
                  localStorage['login'] = AppForm.tfID.Text;
                }
              }
            }
          }
        },
        {
          Text: 'Session Card',
          Controls: {
            tfIDCard1: {
              Type: 'weEdit',
              L: 100,
              T: 28,
              W: 220,
              Data: { Text: '900' }
            },
            tfTime: {
              Type: 'weEditTime',
              L: 100,
              T: 108,
              W: 150
            },
            tfDate: {
              Type: 'weEditDate',
              L: 100,
              T: 68,
              W: 180
            },
            weText1: {
              Type: 'weText',
              L: 20,
              T: 76,
              Data: {
                HTMLEncode: true,
                Text: 'Date'
              }
            },
            weLabel2: {
              Type: 'weLabel',
              L: 20,
              T: 108,
              Data: {
                HTMLEncode: true,
                Text: 'Time In:'
              }
            },
            lbId: {
              Type: 'weLabel',
              L: 20,
              T: 28,
              Data: {
                HTMLEncode: true,
                Text: '900:'
              }
            },
            weLabel1: {
              Type: 'weLabel',
              L: 20,
              T: 148,
              Data: {
                HTMLEncode: true,
                Text: 'Face to face Appt'
              }
            },
            lb2: {
              Type: 'weLabel',
              L: 20,
              T: 188,
              Data: {
                HTMLEncode: true,
                Text: 'Face to Face Walk In'
              }
            },
            weLabel3: {
              Type: 'weLabel',
              L: 20,
              T: 228,
              Data: {
                HTMLEncode: true,
                Text: 'Online Appt'
              }
            },
            cbFacetoFace: {
              Type: 'weCheckBox',
              L: 220,
              T: 148,
              Data: {
                HTMLEncode: true,
                Text: ''
              }
            },
            cbFacetoFaceWalkIn: {
              Type: 'weCheckBox',
              L: 220,
              T: 188,
              Data: {
                HTMLEncode: true,
                Text: ''
              }
            },
            cbOnlineAppt: {
              Type: 'weCheckBox',
              L: 220,
              T: 228,
              Data: {
                HTMLEncode: true,
                Text: ''
              }
            },
            weLabel4: {
              Type: 'weLabel',
              L: 20,
              T: 268,
              Data: {
                HTMLEncode: true,
                Text: 'Student'
              }
            },
            lbCourse: {
              Type: 'weLabel',
              L: 20,
              T: 308,
              Data: {
                HTMLEncode: true,
                Text: 'Course'
              }
            },
            lbInstructor: {
              Type: 'weLabel',
              L: 20,
              T: 348,
              Data: {
                HTMLEncode: true,
                Text: 'Instructor'
              }
            },
            lbTutor1: {
              Type: 'weLabel',
              L: 20,
              T: 388,
              Data: {
                HTMLEncode: true,
                Text: 'Tutor 1'
              }
            },
            lbTutor2: {
              Type: 'weLabel',
              L: 20,
              T: 428,
              Data: {
                HTMLEncode: true,
                Text: 'Tutor 2'
              }
            },
            lbDuring: {
              Type: 'weLabel',
              L: 20,
              T: 468,
              Data: {
                HTMLEncode: true,
                Text: 'During this session, we worked on...'
              }
            },
            tfStudent: {
              Type: 'weEdit',
              L: 100,
              T: 268,
              W: 300,
              Data: { Text: '' }
            },
            tfCourse: {
              Type: 'weEdit',
              L: 100,
              T: 308,
              W: 300,
              Data: { Text: '' }
            },
            tfInstructor: {
              Type: 'weEdit',
              L: 100,
              T: 348,
              W: 300,
              Data: { Text: '' }
            },
            tfTutor1: {
              Type: 'weEdit',
              L: 100,
              T: 384,
              W: 300,
              Data: { Text: '' }
            },
            tfTutor2: {
              Type: 'weEdit',
              L: 100,
              T: 428,
              W: 300,
              Data: { Text: '' }
            },
            tfNote: {
              Type: 'weMemo',
              L: 0,
              T: 508,
              H: 240,
              R: 0,
              Data: { Text: '' }
            },
            Submit: {
              Type: 'weButton',
              L: 20,
              T: 768,
              Data: {
                HTMLEncode: true,
                Text: 'Submit'
              },
              Events: {
                OnClick: function (e) {
                  socket.emit('session card', {
                    id: AppForm.tfIDCard1.Text,
                    date: AppForm.tfDate.Text,
                    time: AppForm.tfTime.Text,
                    facetoFaceAppt: AppForm.cbFacetoFace.Checked,
                    facetoFaceWalk: AppForm.cbFacetoFaceWalkIn.Checked,
                    onlineAppt: AppForm.cbOnlineAppt.Checked,
                    studentName: AppForm.tfStudent.Text,
                    courseName: AppForm.tfCourse.Text,
                    instructorName: AppForm.tfInstructor.Text,
                    tutor1: AppForm.tfTutor1.Text,
                    tutor2: AppForm.tfTutor2.Text,
                    notes: AppForm.tfNote.Text
                  });
                  localStorage['login'] = AppForm.tfIDCard1.Text;
                  localStorage['face to face appt'] = AppForm.cbFacetoFace.Checked;
                  localStorage['face to face walk in'] = AppForm.cbFacetoFaceWalkIn.Checked;
                  localStorage['online appt'] = AppForm.cbOnlineAppt.Checked;
                  localStorage['student name'] = AppForm.tfStudent.Text;
                  localStorage['instructor name'] = AppForm.tfInstructor.Text;
                  localStorage['course name'] = AppForm.tfCourse.Text;
                  AppForm.tfNote.SetText('');
                  AppForm.tfTutor1.SetText('');
                  AppForm.tfTutor2.SetText('');
                }
              }
            }
          }
        },
        {
          Text: 'Resources',
          Controls: {
            wePages2: {
              Type: 'wePages',
              L: 0,
              T: 0,
              R: 0,
              B: 0,
              Data: {
                HTMLEncode: true,
                Page: 0,
                PagesAlign: 'left',
                PagesVAlign: 'top'
              },
              Pages: [
                {
                  Text: 'Begining Algebra',
                  Controls: {
                    lbPreAlgebra: {
                      Type: 'weText',
                      L: 20,
                      T: 16,
                      Data: {
                        HTMLEncode: false,
                        Text: '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLz02P9ArNcAOQ2t0rDa4utmvO8jMNK58a" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
                      }
                    }
                  }
                },
                {
                  Text: 'Algebra',
                  Controls: {
                    lbAlgebra: {
                      Type: 'weText',
                      L: 20,
                      T: 16,
                      Data: {
                        HTMLEncode: false,
                        Text: '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLz02P9ArNcAOQ2t0rDa4utmvO8jMNK58a" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
                      }
                    }
                  }
                },
                {
                  Text: 'Calculus',
                  Controls: {
                    lbCalc: {
                      Type: 'weText',
                      L: 20,
                      T: 16,
                      Data: {
                        HTMLEncode: false,
                        Text: '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLz02P9ArNcAOtOL0_DCriVecOfcP8Wcdt" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
                      }
                    }
                  }
                },
                {
                  Text: 'Calculus 2',
                  Controls: {
                    lbCalc2: {
                      Type: 'weText',
                      L: 20,
                      T: 16,
                      Data: {
                        HTMLEncode: false,
                        Text: '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLz02P9ArNcAOtqHttN-i8ZxAeh-_f9mC1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
                      }
                    }
                  }
                },
                {
                  Text: 'Statistics',
                  Controls: {
                    lbStats: {
                      Type: 'weText',
                      L: 20,
                      T: 16,
                      Data: {
                        HTMLEncode: false,
                        Text: '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLz02P9ArNcANjYxL_T63nzsfOd4XnIWcc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
                      }
                    }
                  }
                },
                {
                  Text: 'Other Resources',
                  Controls: {
                    weText2: {
                      Type: 'weText',
                      L: 20,
                      T: 20,
                      Data: {
                        HTMLEncode: false,
                        Text: '<a href="https://www.khanacademy.org">Khan Academy</a>'
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    }
  });
  AppForm.Update();
  localStorage = {};
  var cachedID = localStorage['login'];
  if (cachedID){
    AppForm.tfID.SetText(cachedID);
    AppForm.tfIDCard1.SetText(cachedID);
  }
  var d = new Date();

  AppForm.tfDate.SetText(d.toLocaleDateString());
  AppForm.tfTime.SetText(d.toLocaleTimeString());

  var cachedf2fAppt = localStorage['face to face appt'];
  if (cachedf2fAppt){
    //AppForm.cbFacetoFace.Check(cachedf2fAppt);
  }

  var cachedf2fWalkin = localStorage['face to face walk in'];
  if (cachedf2fWalkin){
    //AppForm.cbFacetoFaceWalkIn.Check(cachedf2fWalkin);
  }

  var cachedOnlineAppt = localStorage['online appt'];
  if (cachedOnlineAppt){
    //AppForm.cbOnlineAppt.Check(cachedOnlineAppt);
  }

  var cachedStudent = localStorage['student name'];
  if (cachedStudent){
    AppForm.tfStudent.SetText(cachedStudent);
  }

  var cachedCourse = localStorage['course name'];
  if (cachedCourse){
    AppForm.tfCourse.SetText(cachedCourse);
  }

  var cachedInstructor = localStorage['instructor name'];
  if (cachedInstructor){
    AppForm.tfInstructor.SetText(cachedInstructor);
  }

}
