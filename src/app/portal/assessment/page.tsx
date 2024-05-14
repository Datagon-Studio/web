import { DummyTableData } from '@/components/dataTable/dummydata';
import Table from '@/components/dataTable/table'
import React from 'react'

export default function Assessment() {
    const headers = [
        { label: 'Assessment Name'  },
        { label: 'Started By' },
        { label: 'Initiated' },
        { label: 'Completed' },
        { label: 'Status' },
        { label: 'Actions'  }
      ];

    return (
        <div className="flex mx-auto w-full">       
          <Table headers={headers} body={DummyTableData.assessment}/>
        </div>
    )
}
