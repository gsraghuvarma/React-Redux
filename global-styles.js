import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    max-height: 100%;
    min-width: 100%;
  }
  .container {
    width: 500px;
    border: 2px solid #ccc;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 60px auto;
    height: 290px;
    padding: 10px;
    text-align: center;
  }
  .containersub {
    width: 500px;
    border: 2px solid #ccc;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 60px auto;
    height: auto;
    padding: 10px;
    text-align: center;
  }
  .AdminLogin {
    background-color: #e7e7e7;
    color: black;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
  .AccountLogin {
    background-color: #555555;
    color: white;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
  .Loginusername {
    width:90%;
    padding:5px;
    margin:5px;
  }
  .Loginusername input, .Loginusername textarea {
    margin-top:20px;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  }
  .Loginusername label {
    width: 100px;
    display: inline-block;
  }
  .errorMsg {
    color: #FF0000;
  }
  .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    background-color: transparent;
  }
  .table thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }
  .table>thead>tr>th {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd;
  }
  .table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
    border: 1px solid #ddd;
  }
  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
