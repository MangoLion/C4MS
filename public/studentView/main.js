var AppForm = null;
var socket = io.connect();

function ngMain()
{
  AppForm = new ngControls({
    groupMain: {
      Type: 'weGroup',
      L: 0,
      T: 0,
      R: 0,
      B: 0,
      Data: {
        HTMLEncode: true,
        Text: ''
      },
      Controls: {
        logo: {
          Type: 'weText',
          L: 18,
          T: 0,
          W: 300,
          H: 180,
          Data: {
            HTMLEncode: false,
            Text: '<img src="logo.jpg" alt="Logo">'
          }
        },
        wePages1: {
          Type: 'wePages',
          L: 0,
          T: 178,
          R: 0,
          H: 950,
          style: { backgroundColor: '#c2ffb3' },
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
                  L: 18,
                  T: 28,
                  W: 220,
                  Data: { Text: '900' }
                },
                btSignIn: {
                  Type: 'weButton',
                  L: 78,
                  T: 88,
                  Data: {
                    HTMLEncode: true,
                    Text: 'Sign In'
                  },
                  Events: {
                    OnClick: function (e) {
                      var text = AppForm.tfID.Text;
                      if (!text.match(/^-{0,1}\d+$/))
                        //check if is integer
                        {
                          ngMessageDlg('weDlgMessageBox', 'Student ID must be a number!', 'Error ⚠', function (c) {
                            return true;
                          });
                          return;
                        }
                      if (text.length != 9) {
                        ngMessageDlg('weDlgMessageBox', 'Student ID must be exactly 9 digits!', 'Error ⚠', function (c) {
                          return true;
                        });
                        return;
                      }
                      socket.emit('login', { id: text });
                      localStorage['login'] = text;
                      var currentDate = new Date();
                      localStorage['last login time'] = formatAMPM(new Date());
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
                  W: 220
                },
                tfDate: {
                  Type: 'weEditDate',
                  L: 100,
                  T: 68,
                  W: 220
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
                  T: 180,
                  Data: {
                    HTMLEncode: true,
                    Text: 'Face to face Appt'
                  }
                },
                lb2: {
                  Type: 'weLabel',
                  L: 20,
                  T: 220,
                  Data: {
                    HTMLEncode: true,
                    Text: 'Face to Face Walk In'
                  }
                },
                weLabel3: {
                  Type: 'weLabel',
                  L: 20,
                  T: 260,
                  Data: {
                    HTMLEncode: true,
                    Text: 'Online Appt'
                  }
                },
                cbFacetoFace: {
                  Type: 'weCheckBox',
                  L: 220,
                  T: 180,
                  Data: {
                    HTMLEncode: true,
                    Text: ''
                  }
                },
                cbFacetoFaceWalkIn: {
                  Type: 'weCheckBox',
                  L: 220,
                  T: 220,
                  Data: {
                    HTMLEncode: true,
                    Text: ''
                  }
                },
                cbOnlineAppt: {
                  Type: 'weCheckBox',
                  L: 220,
                  T: 260,
                  Data: {
                    HTMLEncode: true,
                    Text: ''
                  }
                },
                weLabel4: {
                  Type: 'weLabel',
                  L: 20,
                  T: 300,
                  Data: {
                    HTMLEncode: true,
                    Text: 'Student'
                  }
                },
                lbCourse: {
                  Type: 'weLabel',
                  L: 20,
                  T: 340,
                  Data: {
                    HTMLEncode: true,
                    Text: 'Course'
                  }
                },
                lbInstructor: {
                  Type: 'weLabel',
                  L: 20,
                  T: 380,
                  Data: {
                    HTMLEncode: true,
                    Text: 'Instructor'
                  }
                },
                lbTutor1: {
                  Type: 'weLabel',
                  L: 20,
                  T: 420,
                  Data: {
                    HTMLEncode: true,
                    Text: 'Tutor 1'
                  }
                },
                lbTutor2: {
                  Type: 'weLabel',
                  L: 20,
                  T: 460,
                  Data: {
                    HTMLEncode: true,
                    Text: 'Tutor 2'
                  }
                },
                lbDuring: {
                  Type: 'weLabel',
                  L: 20,
                  T: 500,
                  Data: {
                    HTMLEncode: true,
                    Text: 'During this session, we worked on...'
                  }
                },
                tfStudent: {
                  Type: 'weEdit',
                  L: 100,
                  T: 300,
                  W: 300,
                  Data: { Text: '' }
                },
                tfCourse: {
                  Type: 'weEdit',
                  L: 100,
                  T: 340,
                  W: 300,
                  Data: { Text: '' }
                },
                tfInstructor: {
                  Type: 'weEdit',
                  L: 100,
                  T: 380,
                  W: 300,
                  Data: { Text: '' }
                },
                tfTutor1: {
                  Type: 'weEdit',
                  L: 100,
                  T: 416,
                  W: 300,
                  Data: { Text: '' }
                },
                tfTutor2: {
                  Type: 'weEdit',
                  L: 100,
                  T: 460,
                  W: 300,
                  Data: { Text: '' }
                },
                tfNote: {
                  Type: 'weMemo',
                  L: 0,
                  T: 540,
                  H: 240,
                  R: 0,
                  Data: { Text: '' }
                },
                Submit: {
                  Type: 'weButton',
                  L: 20,
                  T: 800,
                  Data: {
                    HTMLEncode: true,
                    Text: 'Submit'
                  },
                  Events: {
                    OnClick: function (e) {
                      var text = AppForm.tfIDCard1.Text;
                      if (!text.match(/^-{0,1}\d+$/))
                        //check if is integer
                        {
                          ngMessageDlg('weDlgMessageBox', 'Student ID must be a number!', 'Error ⚠', function (c) {
                            return true;
                          });
                          return;
                        }
                      if (text.trim().length != 9) {
                        ngMessageDlg('weDlgMessageBox', 'Student ID must be exactly 9 digits!', 'Error ⚠', function (c) {
                          return true;
                        });
                        return;
                      }
                      socket.emit('session card', {
                        id: AppForm.tfIDCard1.Text,
                        reason: AppForm.cbReason.Text,
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
                },
                weLabel5: {
                  Type: 'weLabel',
                  L: 20,
                  T: 148,
                  Data: {
                    HTMLEncode: true,
                    Text: 'Reason:'
                  }
                },
                cbReason: {
                  Type: 'weDropDown',
                  L: 100,
                  T: 148,
                  W: 220,
                  Data: { Text: 'General Help' },
                  DropDown: {
                    Type: 'ngList',
                    Data: {
                      Items: [
                        { Text: 'General Help' },
                        { Text: 'General Focus' },
                        { Text: 'Test Prep' }
                      ]
                    }
                  }
                }
              },
              H: 1600
            },
            {
              Text: 'Profile',
              Controls: {
                lbExp: {
                  Type: 'weLabel',
                  L: 5,
                  T: 20,
                  Data: {
                    HTMLEncode: true,
                    Text: 'Experience:'
                  }
                },
                pbExp: {
                  Type: 'weProgressBar',
                  L: 130,
                  T: 33,
                  R: 5
                },
                lbNext: {
                  Type: 'weLabel',
                  L: 5,
                  T: 52,
                  Data: {
                    HTMLEncode: true,
                    Text: 'To Next level:'
                  }
                },
                lbReward: {
                  Type: 'weLabel',
                  L: 5,
                  T: 84,
                  Data: {
                    HTMLEncode: true,
                    Text: 'Next Reward:'
                  }
                },
                listRewards: {
                  Type: 'weList',
                  L: 5,
                  T: 160,
                  W: 155,
                  H: 200,
                  style: { borderStyle: 'dashed' },
                  Data: {
                    HTMLEncode: true,
                    Items: [{ Text: 'Item 1' }]
                  }
                },
                weLabel6: {
                  Type: 'weLabel',
                  L: 5,
                  T: 128,
                  Data: {
                    HTMLEncode: true,
                    Text: 'Rewards Claimed:'
                  }
                },
                lbLevel: {
                  Type: 'weLabel',
                  L: 0,
                  T: 1,
                  R: 0,
                  Data: {
                    HTMLEncode: true,
                    Text: 'Level'
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
              },
              H: 0
            },
            {
              Text: 'Forums',
              Controls: {}
            }
          ],
          Events: {
            OnPageChanged: function (c, oldpage) {
              if (c.Page == 3)
                location.href = 'https://math.loyallyon.com';
              /*
                if (c.Page == 1){
                  AppForm.groupMain.H = 950;
                  delete AppForm.groupMain.B;
                  AppForm.Update();
                  console.log(c);
                }else{
                  AppForm.groupMain.B = 0;
                  delete AppForm.groupMain.H;
                  AppForm.Update();
                  console.log(c);
                }*/
              return true;
            }
          }
        }
      }
    }
  }
  
  
  
  );
  AppForm.Update();
  //localStorage = {};
  var cachedID = localStorage['login'];
  if (cachedID){
    AppForm.tfID.SetText(cachedID);
    AppForm.tfIDCard1.SetText(cachedID);
    
    socket.emit('profile request', {id: cachedID});
  }
  var d = new Date();

  socket.on('profile data', function (data) {
    var profile = data.profile;
    AppForm.lbLevel.SetText("Level: " + (profile.level + 1));
    AppForm.pbExp.SetPosition(profile.exp/(profile.exp + profile.toNextLevel)*100);
    AppForm.lbNext.SetText("To Next Level: " + profile.toNextLevel);
    AppForm.listRewards.SetItems(profile.rewards);
    AppForm.lbReward.SetText("Next Reward: " + profile.nextReward);
  });

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

  var cachedTime = localStorage['last login time'];
  if (cachedTime){
    AppForm.tfTime.SetText(cachedTime);
  }else{
    AppForm.tfTime.SetText(formatAMPM(new Date()));
  }

}
