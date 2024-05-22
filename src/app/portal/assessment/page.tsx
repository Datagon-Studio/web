"use client"
import { DummyTableData } from '@/components/dataTable/dummydata';
import Table from '@/components/dataTable/table'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setUserStatus } from '@/core/slice/signUpUserVerification';
import { RootState } from '@/core/store';
import { BeginAssessment } from './beginAssessment';

export const AssessmentEmptyState = () => {
  const [selected, setSelected] = useState(false);
  const [approved, setApproved] = useState(false);
  const [takeTest, setTesttest] = useState(false)

  const handleRequestAccess = () => {
    setSelected(true)
    setApproved(true);
    setTimeout(() => {
      setApproved(false);
      setTesttest(true)
    }, 6000);
    
  }

  return (
    <>
      {
        takeTest ? (
          <BeginAssessment />
        ) : (
          <div className="border-2 border-dashed dark:border-gray-200 border-gray-400 rounded-2xl mx-2 dark:border-gray-800 h-[93vh] w-full flex justify-center items-center top-50 left-50">

            <div className='inline text-center'>
              <div className='px-16 py-4'>
                To continue, kindly request access to fill out the form.
                Your agreement enables us to collect necessary information for processing your request efficiently.
                Thank you for your cooperation!</div>
              <div><button className="btn border-0 justify-start w-[auto] hover:bg-primary hover:text-white  dark:text-white bg-gray-200 dark:bg-neutral-700 me-4 my-2 text-black"
                onClick={() => handleRequestAccess()}>

                {approved ? (
                  <>
                    Loading <span className="loading loading-dots loading-md"></span>
                  </>

                ) : (<div className='flex justify-start items-center'>
                  <div className=" flex justify-start">
                    <label className="flex">
                      <input type="checkbox" checked={selected} className="checkbox checkbox-primary checkbox-sm me-2 border-info [--chkfg:white] text-white" />
                      <span className="sr-only">Checkbox</span>
                    </label>
                  </div>
                  <div>Request Access</div>
                </div>)}

              </button>
              </div>
            </div>
          </div>
        )
      }
    </>

  )
}

export default function Assessment() {
  const dispatch = useDispatch();
  const userStatus = useSelector((state: RootState) => state.user.status);
  const [userProfile, setUserProfile] = useState('')

  useEffect(() => {
    const ProfileStatus = localStorage.getItem("filledProfile")
    if (ProfileStatus !== null) {
      setUserProfile(ProfileStatus);
    }

    const modalCheckbox = document.getElementById('my_modal_6') as HTMLInputElement;
    if (modalCheckbox) {
      modalCheckbox.checked = true;
    }
  }, [userProfile]);


  const headers = [
    { label: 'Assessment Name' },
    { label: 'Started By' },
    { label: 'Initiated' },
    { label: 'Completed' },
    { label: 'Status' },
    { label: 'Actions' }
  ];

  return (
    <div className="flex mx-auto w-full">
      {userProfile == 'unverified' ? (
        <>
          <label htmlFor="my_modal_6" className="btn hidden">open modal</label>
          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box bg-white dark:bg-neutral-700">

              <p className="py-4 text-center text-gray-500 dark:text-white">Welcome to the Education Collaborative Playbook.
                Kindly fill out all details to gain full access</p>
              <div className="modal-action flex justify-center ">
                <a className='btn btn-primary px-12 text-white' href="/portal/settings"> Proceed</a>
              </div>
            </div>
          </div>
          <AssessmentEmptyState />
        </>
      ) : (
        <>
          {
            DummyTableData.assessment.length === 0 ? (
              <AssessmentEmptyState />
            ) : (
              <Table headers={headers} body={DummyTableData.assessment} />
            )
          }
        </>
      )}


    </div>
  )
}
