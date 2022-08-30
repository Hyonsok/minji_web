import React from 'react'
import './Tool.css'
import { DiLinux, DiLaravel, DiPhotoshop, DiVisualstudio } from 'react-icons/di'
import { SiPostman } from 'react-icons/si'
function Tool() {
  return (
    <div>
    <h1 className='tools-heading'>Tools I used</h1>
        <div class="row">
          <div class="column">
            <div class="card">
            <DiLinux/>
            </div>
          </div>

          <div class="column">
            <div class="card">
            <DiLaravel/>
            </div>
          </div>
          
          <div class="column">
            <div class="card">
              <DiPhotoshop/>
            </div>
          </div>
          
          <div class="column">
            <div class="card">
              <DiVisualstudio/>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <SiPostman/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Tool