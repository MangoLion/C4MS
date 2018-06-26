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
                  socket.emit('session card', { id: AppForm.tfIDCard1.Text, date: AppForm.tfDate.Text, time: AppForm.tfTime.Text, facetoFaceAppt: AppForm.cbFacetoFace.Checked,
                  facetoFaceWalk: AppForm.cbFacetoFaceWalkIn.Checked, onlineAppt: AppForm.cbOnlineAppt.Checked, studentName: AppForm.tfStudent.Text, courseName: AppForm.tfCourse.Text,
                instructorName: AppForm.tfInstructor.Text, tutor1: AppForm.tfTutor1.Text, tutor2: AppForm.tfTutor2.Text, notes: AppForm.tfNote.Text  });
                }
              }
            }
          }
        },
        { Text: 'Resources' }
      ]
    }
  });
  AppForm.Update();
}
