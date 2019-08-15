Invoicing System Client
Development server
Run npm start for a dev server. Navigate to http://localhost:8080/. The app will automatically reload if you change any of the source files.

Build
Run npm run build to build the project. The build artifacts will be stored in the build/ directory.

Running unit tests
Run npm run test to execute the tests via JEST.

Configuration
This application is closely dependent on InvoicingSystemServer from which it loads information and sends payments requests. InvoicingSystemServer endpoint is configured using 'REACT_APP_SERVER' environment constant.
