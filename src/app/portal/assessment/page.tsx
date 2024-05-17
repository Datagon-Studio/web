import { DummyTableData } from '@/components/dataTable/dummydata';
import Table from '@/components/dataTable/table'
import React from 'react'

export default function Assessment() {
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
      {
        DummyTableData.assessment.length === 0 ? (
          <div className="border-2 border-dashed dark:border-gray-200 border-gray-400 rounded-2xl mx-2 dark:border-gray-800 h-[93vh] w-full flex justify-center items-center top-50 left-50">
            <div className='inline text-center'>
              <div>You have not filled out any assesment yet</div>
              <div><button className='btn btn-primary my-2 text-white'> Start New Assesment </button></div>
            </div>
          </div>
        ) : (
          <Table headers={headers} body={DummyTableData.assessment} />
        )
      }

    </div>
  )
}
