import React, { Component } from 'react';
import {
  BrowserRouter,Route, Redirect, Switch
} from 'react-router-dom';
import '../global.css';

// Import App Components
import Header from '../Components/Header';
import Courses from '../Components/Courses/Courses';
import CourseDetail from '../Components/CourseDetail/CourseDetail';
import CreateCourse from '../Components/CreateCourse';
import UserSignUp from '../Components/UserSignUp';
import UserSignIn from '../Components/UserSignIn';
import UserSignOut from '../Components/UserSignOut';
import UpdateCourse from '../Components/UpdateCourse';
import DeleteCourse from '../Components/DeleteCourse';
import ErrorPage from '../Components/Error';
import Forbidden from '../Components/Forbidden'
import NotFound from '../Components/NotFound';
import CourseForm from '../Components/CourseForm';

// Connect the App Component to Context
import withContext from './Components/Context';
// Import the PrivateRoute Component
import PrivateRoute from './PrivateRoute';

const HeaderWithContext = withContext(Header);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);
const CourseDetailWithContext = withContext(CourseDetail);
const CreateCourseWithContext = withContext(CreateCourse);
const CoursesWithContext = withContext(Courses);
const NotFoundWithContext = withContext(NotFound);
const UpdateCourseWithContext = withContext(UpdateCourse)
const DeleteCourseWithContext = withContext(DeleteCourse);

export default class App extends Component {
  // Constructor initializes state //

  state = {
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <HeaderWithContext />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/courses/" />} />

            <Route path="/signin" component={UserSignInWithContext} />
            <Route path="/signup" component={UserSignUpWithContext} />
            <Route path="/signout" component={UserSignOutWithContext} />

            <PrivateRoute exact path="/courses/create/" component={CreateCourseWithContext} />
            <Route exact path="/courses" component={CoursesWithContext} />
            <PrivateRoute path="/courses/:id/update/" component={UpdateCourseWithContext} />
            <PrivateRoute path="/courses/:id/delete/" component={DeleteCourseWithContext} />
            <Route path="/courses/:id" component={CourseDetailWithContext} />

            <Route exact path="/notfound" component={NotFoundWithContext} />
            <Route exact path="/error" component={ErrorPage} />
            <Route exact path="/forbidden" component={Forbidden} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}