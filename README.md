# No-Svchost
REMOVE THIS SHIT OF SVCHOST !! :@

## Requierment

- [NodeJs](https://nodejs.org/dist/v8.8.1/node-v8.8.1-x64.msi)
- Administrator privileges
- [Git for windows](https://github.com/git-for-windows/git/releases/download/v2.14.3.windows.1/Git-2.14.3-64-bit.exe) or download as zip this git repository

## Install this script

- execute in cmd : `git clone https://github.com/AlexisVisco/No-Svchost/`
- create this bat file on your desktop :
```bat
@rem
echo OFF
NET SESSION >nul 2>&1
IF %ERRORLEVEL% EQU 0 (
    cd "c:\Workspace\dev\nodejs\kill-svchost\"
    node .
) ELSE (
   echo ######## ########  ########   #######  ########  
   echo ##       ##     ## ##     ## ##     ## ##     ## 
   echo ##       ##     ## ##     ## ##     ## ##     ## 
   echo ######   ########  ########  ##     ## ########  
   echo ##       ##   ##   ##   ##   ##     ## ##   ##   
   echo ##       ##    ##  ##    ##  ##     ## ##    ##  
   echo ######## ##     ## ##     ##  #######  ##     ## 
   echo.
   echo.
   echo ####### ERROR: ADMINISTRATOR PRIVILEGES REQUIRED #########
   echo This script must be run as administrator to work properly!  
   echo If you're seeing this after clicking on a start menu icon, then right click on the shortcut and select "Run As Administrator".
   echo ##########################################################
   echo.
   PAUSE
   EXIT /B 1
)
cmd /k
```
- replace `c:\Workspace\dev\nodejs\kill-svchost\` with the location of the cloned repository
- launch the bat file as administrator !

**Now svchost is not a problem.**
