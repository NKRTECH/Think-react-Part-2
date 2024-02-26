<!-- REACT 1 | LET'S START UP -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React App</title>
</head>
<body>
    <div id="react-container"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js" ></script>
    
    
    
    <Script src="/app.js" type="module"></Script>
</body>

<!-- Part II - Use JSX and babel compiler -->

<script type="text/babel">
  class ReactContainerTwo extends React.Component{
    render(){
        return (
        <div>Hello! Welcome to Kalvium   
           <div>Let's rock and roll - this is babel</div>
       </div> )
    };  
}

const containerFour = document.getElementById('react-container');
ReactDOM.render(<ReactContainerTwo/>,containerFour);

</script>

</html>
