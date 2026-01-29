@echo off
cd /d "%~dp0"
echo ========================================
echo PUSHING TO GITHUB
echo ========================================
echo.
git add .
git commit -m "Add journey roadmap process section with scroll-triggered animations, winding road path, checkpoint cards, and particle effects"
git push origin main
echo.
echo ========================================
echo DONE!
echo ========================================
pause
