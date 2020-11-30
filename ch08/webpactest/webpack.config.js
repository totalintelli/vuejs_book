var webpack = require("webpack");
module.exports = {
  // entry
  // 처음 로드하는 파일을 지정합니다.
  // 진입 파일은 단일 파일로 지정할 수도 있고, 여러 개의 파일을 지정할 수도 있습니다.
  // 여러 개의 진입 파일을 지정할 때는 객체 형태로 지정하고, 단일 진입 파일일 때는 문자열로 파일의 경로를 지정합니다.
  // [단일 진입 파일인 경우]
  // entry: __dirname + '/src/index.js'
  // [다중 진입 파일인 경우]
  // entry: {
  //    main: __dirname + '/src/index.js',
  //    app: __dirname + '/src/main.js'
  // }
  // 다중 진입 파일인 경우는 진입 파일 개수만큼의 번들링된 자바스크립트 코드를 만들어냅니다.
  // 프로젝트의 디렉터리(__dirname)와 문자열로 전달된 경로를 조합하여 경로를 지정합니다.
  entry: {
    main: __dirname + "/src/index.js",
  },
  // output
  // 번들링된 결과물의 출력 방법을 지정합니다.
  // path 옵션은 번들링된 파일의 저장 경로입니다.
  // publicPath 옵션에는 웹서버에서 이용될 때의 사용 경로를 지정합니다.
  // filename으로는 생성하는 파일의 파일명을 지정합니다.
  // filename은 정적 문자열이 될 수도 있지만 entry 이름이 파일명에 반영되도록
  // '[name]'이라는 대체 문자를 이용할 수 있습니다.
  output: {
    path: __dirname + "/public/dist/",
    filename: "[name].js",
    publicPath: "/dist",
  },
  // module
  // 이 옵션에는 프로젝트 내부에서 사용하는 다양한 유형의 모듈을 수행하는 방법을 지정합니다.
  // 특히 module 옵션에서 가장 많이 설정하는 내용인 로더(loader)에 대해서는 ES2015를 이전 버전의 자바스크립트 코드로
  // 트랜스파일할 수 있도록 babel-loader를 사용하도록 작성해보겠습니다.
  // module 옵션에 rules 배열을 추가하고 규칙(rule)을 추가합니다.
  module: {
    rules: [
      {
        // 내부의 test 옵션에서는 정규식을 지정합니다.
        // /\.js$/ 정규식은 파일명이 .js로 끝나는 경우로 한정한다는 뜻입니다.
        test: /\.js$/,
        // Babel을 이용해 트랜스파일하도록 babel-loader를 지정합니다.
        loader: "babel-loader",
        // exclude에는 트랜스파일 대상에 포함시키지 않을 파일명의 정규식 패턴을 지정합니다.
        exclude: /node_modules/,
      },
    ],
  },
  // plugins
  // plugins 옵션은 다양한 방법으로 Webpack 빌드 프로세스에 사용자가 지정한 작업을 추가할 수 있는 기능을 제공합니다.
  // 예를 들어 코드 난독화와 압축 기능을 제공하는 UglifyJsPlugin을 들 수 있습니다.
  plugins: [new webpack.optimize.UglifyJsPlugin()],
};
