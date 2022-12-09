import React from 'react'
import "../Components/hobies.css"
export default function Hobies() {
  return (
    <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center">
        <div class="col-20 col-md-5">
            <form class="" action="" method="post" >
                <h1>Select your Hobbies:</h1>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Reading" id="Reading"/>
                    <label class="form-check-label" for="Reading">
                    Reading
                    </label>
                </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="Traveling" id="Traveling" />
            <label class="form-check-label" for="Traveling">
            Traveling
            </label>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="Cricket" id="Cricket" />
            <label class="form-check-label" for="Cricket">
            Cricket
            </label>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="Football" id="Football" />
            <label class="form-check-label" for="Football">
            Football
            </label>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="Movies" id="Movies" />
            <label class="form-check-label" for="Movies">
            Movies
            </label>
        </div>

        <div class="form-group">
            <label for="hobies">Any Other hobby:</label>
            <input type="text" class="form-control" id="hobby" name="hobby"/>
        </div>
        <button type="submit" class="btn btn-primary ">Submit</button>
</form>
</div>
</div>
</div>


  )
}
