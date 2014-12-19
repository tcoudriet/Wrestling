function display(window)
{
    if (window == "news")
    {
        document.getElementById('NewsBtn').className = "Button-Selected";
        document.getElementById('RosterBtn').className = "Button";
        document.getElementById('ScheduleBtn').className = "Button";
        document.getElementById('PhotosBtn').className = "Button";
        document.getElementById('VideosBtn').className = "Button";
        
        document.getElementById('NewsBtn').style.borderBottom = "none";
        document.getElementById('RosterBtn').style.borderBottom = "1px solid #F1C40F";
        document.getElementById('ScheduleBtn').style.borderBottom = "1px solid #F1C40F";
        document.getElementById('PhotosBtn').style.borderBottom = "1px solid #F1C40F";
        document.getElementById('VideosBtn').style.borderBottom = "1px solid #F1C40F";
        
        document.getElementById('NewsWindow').style.display = "block";
        document.getElementById('RosterWindow').style.display = "none";
        document.getElementById('ScheduleWindow').style.display = "none";
        document.getElementById('PhotosWindow').style.display = "none";
        document.getElementById('VideosWindow').style.display = "none";
    }
    
    if (window == "roster")
    {
        document.getElementById('NewsBtn').className = "Button";
        document.getElementById('RosterBtn').className = "Button-Selected";
        document.getElementById('ScheduleBtn').className = "Button";
        document.getElementById('PhotosBtn').className = "Button";
        document.getElementById('VideosBtn').className = "Button";
        
        document.getElementById('NewsBtn').style.borderBottom = "1px solid #F1C40F";
        document.getElementById('RosterBtn').style.borderBottom = "none";
        document.getElementById('ScheduleBtn').style.borderBottom = "1px solid #F1C40F";
        document.getElementById('PhotosBtn').style.borderBottom = "1px solid #F1C40F";
        document.getElementById('VideosBtn').style.borderBottom = "1px solid #F1C40F";
        
        document.getElementById('NewsWindow').style.display = "none";
        document.getElementById('RosterWindow').style.display = "block";
        document.getElementById('ScheduleWindow').style.display = "none";
        document.getElementById('PhotosWindow').style.display = "none";
        document.getElementById('VideosWindow').style.display = "none";
    }
    
    if (window == "schedule")
    {
        document.getElementById('NewsBtn').className = "Button";
        document.getElementById('RosterBtn').className = "Button";
        document.getElementById('ScheduleBtn').className = "Button-Selected";
        document.getElementById('PhotosBtn').className = "Button";
        document.getElementById('VideosBtn').className = "Button";
        
        document.getElementById('NewsBtn').style.borderBottom = "1px solid #F1C40F";
        document.getElementById('RosterBtn').style.borderBottom = "1px solid #F1C40F";
        document.getElementById('ScheduleBtn').style.borderBottom = "none";
        document.getElementById('PhotosBtn').style.borderBottom = "1px solid #F1C40F";
        document.getElementById('VideosBtn').style.borderBottom = "1px solid #F1C40F";
        
        document.getElementById('NewsWindow').style.display = "none";
        document.getElementById('RosterWindow').style.display = "none";
        document.getElementById('ScheduleWindow').style.display = "block";
        document.getElementById('PhotosWindow').style.display = "none";
        document.getElementById('VideosWindow').style.display = "none";
    }
    
    if (window == "photos")
    {
        document.getElementById('NewsBtn').className = "Button";
        document.getElementById('RosterBtn').className = "Button";
        document.getElementById('ScheduleBtn').className = "Button";
        document.getElementById('PhotosBtn').className = "Button-Selected";
        document.getElementById('VideosBtn').className = "Button";
        
        document.getElementById('NewsBtn').style.borderBottom = "1px solid #F1C40F";
        document.getElementById('RosterBtn').style.borderBottom = "1px solid #F1C40F";
        document.getElementById('ScheduleBtn').style.borderBottom = "1px solid #F1C40F";
        document.getElementById('PhotosBtn').style.borderBottom = "none";
        document.getElementById('VideosBtn').style.borderBottom = "1px solid #F1C40F";
        
        document.getElementById('NewsWindow').style.display = "none";
        document.getElementById('RosterWindow').style.display = "none";
        document.getElementById('ScheduleWindow').style.display = "none";
        document.getElementById('PhotosWindow').style.display = "block";
        document.getElementById('VideosWindow').style.display = "none";
    }
    
    if (window == "videos")
    {
        document.getElementById('NewsBtn').className = "Button";
        document.getElementById('RosterBtn').className = "Button";
        document.getElementById('ScheduleBtn').className = "Button";
        document.getElementById('PhotosBtn').className = "Button";
        document.getElementById('VideosBtn').className = "Button-Selected";
        
        document.getElementById('NewsBtn').style.borderBottom = "1px solid #F1C40F";
        document.getElementById('RosterBtn').style.borderBottom = "1px solid #F1C40F";
        document.getElementById('ScheduleBtn').style.borderBottom = "1px solid #F1C40F";
        document.getElementById('PhotosBtn').style.borderBottom = "1px solid #F1C40F";
        document.getElementById('VideosBtn').style.borderBottom = "none";
        
        document.getElementById('NewsWindow').style.display = "none";
        document.getElementById('RosterWindow').style.display = "none";
        document.getElementById('ScheduleWindow').style.display = "none";
        document.getElementById('PhotosWindow').style.display = "none";
        document.getElementById('VideosWindow').style.display = "block";
    }
}

function swapVideo(nextVideo)
{
   
}