import React, {useEffect, useState} from "react";
import "./App.css";
import {MasterDetail, MasterDetail_Detail, MasterDetailItem} from "./components/masterDetails";
import {useQuery, gql} from '@apollo/client';


const GET_PINOS = gql`
    query {
        organization(login: "pinojs") {
            repositories(first: 100, privacy: PUBLIC) {
                nodes {
                    name
                    description
                    url
                }
            }
        }
    }
`;

export interface repoInterface {
    name: string;
    description: string;
    url: string;
}

const App = () => {
    const [selected, setSelected] = useState<repoInterface>({
        name: "",
        description: "",
        url: ""
    })

    const {loading, error, data} = useQuery(GET_PINOS);

    return <>
        <MasterDetail>{
            data && data?.organization?.repositories?.nodes ?
                <div className="flex justify-between">
                    <div className="h-full w-1/3">
                        {
                            data?.organization?.repositories?.nodes.map((repository: any, index: number) => (
                                <MasterDetailItem key={index} payload={repository} setSelected={setSelected}/>
                            ))
                        }
                    </div>
                    <div>
                        <MasterDetail_Detail>
                            <div>
                                {selected.description}
                            </div>
                            <div>
                                {selected.url}
                            </div>
                        </MasterDetail_Detail>
                    </div>

                </div>
                : null
        }
        </MasterDetail>
    </>
}

export default App;
