var AppForm = null;

function ngMain()
{
  AppForm = new ngControls({

    Edit1: 
    {
      Type: 'weEdit',
      L: 20, T: 20, W: 200,
      Data: {
        Text: 'Hello, world!'
      }
    }

  });
  AppForm.Update();
}
