var AppForm = null;
var socket = io.connect();

function ngMain()
{
  var clipboardHandler = new ClipboardHandler

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
        Text: 'Logins',
        Controls: {
          listLogins: {
            Type: 'weList',
            L: 20,
            T: 0,
            W: 220,
            B: 0,
            Data: {
              HTMLEncode: true,
              Items: [],
              SelectType: nglSelectSingle
            }
          },
          btCopy: {
            Type: 'weButton',
            L: 260,
            T: 8,
            Data: {
              HTMLEncode: true,
              Text: 'Copy and Remove',
              OnClick: function (e) {
                var selected = AppForm.listLogins.GetSelected()[0];
                if (!selected)
                  selected = AppForm.listLogins.Items[0];
                clipboardHandler.copy(selected.id);
                AppForm.listLogins.Remove(selected);
                AppForm.listLogins.Update();
              }
            }
          }
        }
      },
      {
        Text: 'Session Cards',
        Controls: {
          listCards: {
            Type: 'weList',
            L: 0,
            T: 0,
            W: 220,

            Data: {
              HTMLEncode: true,
              Items: [],
              SelectType: nglSelectSingle,
              OnClickItem: function (e) {
                var selected = AppForm.listCards.GetSelected()[0]

                var str = "";
                for (var a in selected)
                  if (a != 'Text')
                    str += a + "\n" + selected[a] + "\n\n";
                AppForm.tfCard.SetText(str);
                return true;
              }
            }
          },
          tfCard: {
            Type: 'weMemo',
            L: 240,
            T: 60,
            W: 440,
            B:0,
            Data: { Text: '' }
          },
          btCopyCard: {
            Type: 'weButton',
            L: 240,
            T: 8,
            Data: {
              HTMLEncode: true,
              Text: 'Remove',
              OnClick: function (e) {
                var selected = AppForm.listLogins.GetSelected()[0];
                if (!selected)
                  selected = AppForm.listCards.Items[0];

                AppForm.listLogins.Remove(selected);
                AppForm.listLogins.Update();
              }
            }
          }
        }
      }
    ]
  }
}
);
  AppForm.Update();

  socket.emit('admin request', {});

  socket.on('admin data', function (data) {
    AppForm.listLogins.SetItems(data.logins);
    AppForm.listCards.SetItems(data.cards);

    AppForm.listLogins.Update();
    AppForm.listCards.Update();
  });


}
