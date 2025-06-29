import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationsList from './ApplicationsList';
import useAuth from '../../useAuth/useAuth';
import { applicationPromise } from '../../api/applicationsApi';


const MyApplications = () => {
  const {user} = useAuth();
  return (
    <div>
         <ApplicationStats></ApplicationStats>
        <Suspense fallback={'your application list is loading'}>
               <ApplicationsList
                 applicationPromise={applicationPromise(user.email)}
               >
                   
               </ApplicationsList>
        </Suspense>
    </div>
  );
};

export default MyApplications;