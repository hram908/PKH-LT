@echo off

echo Building client...
cd client\form-pkh
call ng build --prod

echo Building Server...
cd ..\..\server\pkh-backend
call gradlew clean build
