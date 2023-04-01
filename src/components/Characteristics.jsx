import React from "react";
import "../index.css";

export default function Characteristics() {
  return (
    <div className="div-chars">
      <h2 className="char-heading">Characteristics</h2>
      <h3 className="dog-portion">Proportion of dogs that...</h3>

      <div className="char-wrapper">
        Gets along with dogs
        <div className="container">
          <div className="child-1">87%</div>
          <div className="child-2"></div>
        </div>
      </div>

      <div className="char-wrapper">
        Gets along with cats
        <div className="container">
          <div className="child-3">29%</div>
          <div className="child-4"></div>
        </div>
      </div>

      <div className="char-wrapper">
        Gets along with Kids
        <div className="container">
          <div className="child-5">58%</div>
          <div className="child-6"></div>
        </div>
      </div>

      <div className="labels" >
      <div className="are"></div> Does/Are
      <div className="labels" >
      <div className="not"></div> Does not/Are not
      </div>
      <div className="labels" >
      <div className="not-sure"></div> Not sure
      </div>
      </div>
      
      {/* breeds */}

      <div className="breeds" >
        <h3 className="breed-heading" >Top 10 Primary Breeds(Including Mixes)</h3>

        <div className="breed-types-wrapper" >
        <div class="lab-breed">
           Labrador
            <div class="lab-no"></div>
            1,422
          </div>

          <div class="pit-breed">
           Pit
            <div class="pit-no"></div>
           843
          </div>

          <div class="hound-breed">
          Hound
            <div class="hound-no"></div>
           400
          </div>

          <div class="shep-breed">
          Shepherd
            <div class="shep-no"></div>
           376
          </div>

          <div class="ter-breed">
          Terrier
            <div class="shep-no"></div>
           306
          </div>

          <div class="ame-breed">
         American
            <div class="ame-no"></div>
           157
          </div>

          <div class="cata-breed">
         Catahoula
            <div class="cata-no"></div>
          155
          </div>

        

        </div>
        
      </div> 
    </div>
  );
}
