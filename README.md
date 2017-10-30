# No-BackgroundUpdate
REMOVE THIS SHIT OF SVCHOST AND TAKE CONTROL OF YOUR COMPUTER !! :@

## Requierment

- [NodeJs](https://nodejs.org/dist/v8.8.1/node-v8.8.1-x64.msi)
- Administrator privileges
- [Git for windows](https://github.com/git-for-windows/git/releases/download/v2.14.3.windows.1/Git-2.14.3-64-bit.exe) or download as zip this git repository

## Install this script

- execute in cmd : `git clone https://github.com/AlexisVisco/No-BackgroundUpdate/`
- create this bat file on your desktop :
```bat
@rem
echo OFF
NET SESSION >nul 2>&1
IF %ERRORLEVEL% EQU 0 (
    cd "HOME_OF_THE_REPO" :: Change it with the path of the repository cloned, as absolute.
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
- replace `HOME_OF_THE_REPO` with the location of the cloned repository
- launch the bat file as administrator !

**Now svchost is not a problem.**

## what's the script doing

The script, every 8 seconds iterate through the output of the command : `netstat -b -o -n`. If a line contain `svchost.exe` the script get the PID of the processus and kill it by doing this `taskkill /F /PID $PID_OF_PROCESS`.
