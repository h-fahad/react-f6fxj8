import React from 'react';
import './style.css';
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
class Home extends React.Component {
 
  render() {
   
    return (
     
      <div className="maincontainer">
       <section>
          <div class="container py-5">
            
            <header class="text-center mb-5 text-white">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <h1>Study Subscription Plans</h1>
                  <p>Choose a Prepaid Subscription Plan<br /> <a href="#" class="text-reset">Schoolx.pk</a></p>
                </div>
              </div>
            </header>
           
            <div class="row text-center align-items-end">

            <div class="col-lg-3 mb-5 mb-lg-0">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4">Free</h1>
                  <h2 class="h2 font-weight-bold">PKR 00<span class="text-small font-weight-normal ml-2">/ month</span></h2>
                  <div class="custom-separator my-4 mx-auto bg-primary"></div>
                  <ul class="list-unstyled my-5 text-small text-left">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Question Bank</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Report Card Summary</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Quizzes</li>
                      <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Adaptive Learning</li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Live Online Classes</del>
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Test Series and Analysis</del>
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Unlimited Access</del>
                    </li> 
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Doubt-Solving on Platform</del>
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>1:1 Personal mentorship</del>
                    </li>
                  </ul>
                  <a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
                </div>
              </div>
             
              <div class="col-lg-3 mb-5 mb-lg-0">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4">Basic</h1>
                  <h2 class="h2 font-weight-bold">PKR4800<span class="text-small font-weight-normal ml-2">/ month</span></h2>
                  <div class="custom-separator my-4 mx-auto bg-primary"></div>
                  <ul class="list-unstyled my-5 text-small text-left">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Question Bank</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Report Card Summary</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Quizzes</li>
                      <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Adaptive Learning</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>
                      Live Online Classes
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>
                      Test Series and Analysis
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>
                      Unlimited Access
                    </li> 
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Doubt-Solving on Platform</del>
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>1:1 Personal mentorship</del>
                    </li>
                  </ul>
                  <a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
                </div>
              </div>
             
              <div class="col-lg-3 mb-5 mb-lg-0">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4">Classic</h1>
                  <h2 class="h2 font-weight-bold">PKR6200<span class="text-small font-weight-normal ml-2">/ month</span></h2>
                  <div class="custom-separator my-4 mx-auto bg-primary"></div>
                  <ul class="list-unstyled my-5 text-small text-left">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Question Bank</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Report Card Summary</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Quizzes</li>
                      <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Adaptive Learning</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>
                      Live Online Classes
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>
                      Test Series and Analysis
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>
                      Unlimited Access
                    </li> 
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>
                      Doubt-Solving on Platform
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>1:1 Personal mentorship</del>
                    </li>
                  </ul>
                  <a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
                </div>
              </div>
             
              <div class="col-lg-3">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4">Plus</h1>
                  <h2 class="h2 font-weight-bold">PKR8200<span class="text-small font-weight-normal ml-2">/ month</span></h2>
                  <div class="custom-separator my-4 mx-auto bg-primary"></div>
                  <ul class="list-unstyled my-5 text-small text-left">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Question Bank</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Report Card Summary</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Quizzes</li>
                      <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Adaptive Learning</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>
                      Live Online Classes
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>
                      Test Series and Analysis
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>
                      Unlimited Access
                    </li> 
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>
                      Doubt-Solving on Platform
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>
                      1:1 Personal mentorship
                    </li>
                  </ul>
                  <a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
                </div>
              </div>
             
            </div>
          </div>
        </section>
      </div>
     
      
)
};
}
export default Home;