@echo off

echo Building client...
cd client/form-pkh
call ng build --prod --base-href ./

echo Copy client to server...
xcopy /s /y "dist" "..\..\server\pkh-backend\src\main\resources\public\"

set error=%errorlevel%
cd ../
if %error% neq 0 exit /b %error%

echo Building Server...
cd ../server/pkh-backend
call gradlew build --stacktrace

set error=%errorlevel%
cd ../
if %error% neq 0 exit /b %error%

echo Build successful!
explorer "%~dp0server\pkh-backend\build\libs"