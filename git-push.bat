@echo off
cd /d "%~dp0"
echo ========================================
echo PUSHING TO GITHUB
echo ========================================
echo.
git add .
git commit -m "Update process section: add border-only road animation with edge highlights, fade road ends smoothly, remove bottom progress bar, fix center dashes visibility"
git push origin main
echo.
echo ========================================
echo DONE!
echo ========================================
pause
