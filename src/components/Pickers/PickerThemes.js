export const pickerStyle = {
    control: base => ({
      ...base,
      fontWeight: 500,
      fontSize: "20px", 
      fontFamily: "Trebuchet MS",
      background: "white",
      boxShadow: '2px 3px 5px 0 rgba(0, 0, 0, .2)',
    }),
    menu: base => ({
      ...base,
      fontWeight: 200,
      fontSize: 15,
      background: "white"
    })
  };
  export const pickerTheme = (theme) => ({
    ...theme,
    borderRadius: 5,
    colors: {
    ...theme.colors,
    primary: "rgba(19, 103, 44, 0.5)"
    },
  })
  
