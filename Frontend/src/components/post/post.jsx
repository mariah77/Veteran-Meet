import "./post.css";
import PermMedia from "@mui/icons-material/PermMedia"
import Label from "@mui/icons-material/Label"
import Room from "@mui/icons-material/Room"


export default function Post() {
  return (
    <div className="post-container">
      <div className="p-wrapper">
        <div className="top-post">
          <img className="img1" src="/assets/1.jpg" />
          <input
            placeholder="Mustafa Post Anything..."
            className="input1"
          />
        </div>
        <div className="bottom1">
            <div className="options1">
                <div className="option-item1">
                    <PermMedia htmlColor="tomato" className="icon1"/>
                    <span className="text1">Photo or Video</span>
                </div>
                <div className="option-item1">
                    <Label htmlColor="blue" className="icon1"/>
                    <span className="text1">Tag</span>
                </div>
                <div className="option-item1">
                    <Room htmlColor="green" className="icon1"/>
                    <span className="text1">Location</span>
                </div>
            </div>
            <button className="button1">Post</button>
        </div>
      </div>
    </div>
  );
}