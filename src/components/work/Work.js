import React from "react"
import styled from "styled-components/macro"
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined"

function Work() {
  return (
    <WorkContainer id="work">
      <WorkContentContainer>
        <WorkHeader>
          <WorkTitle>Work</WorkTitle>
          <WorkParagraph>
            I create marketing strategies for companies that want to offer more
            than just an interesting service or a pretty product. My
            community-first focus ensures that companies engage with their
            target audience through the most impactful channels.
          </WorkParagraph>
        </WorkHeader>

        <WorkBody>
          {/* 之后用export的方式自动化导入 左右 布局 */}
          <WorkItem>
            <WorkBorder />
            <BusinessCenterOutlinedIcon style={{ fontSize: 44 }} />
            <WorkItemTitle>Data Consultant - Travelers</WorkItemTitle>
            <WorkItemParagraph>
              Study the relationship between marketing communication and
              customer behavior through extracting dynamic behavior changes,
              establishing econometrics modeling, and designing randomized
              experiments.
            </WorkItemParagraph>
          </WorkItem>

          <WorkItem>
            <WorkBorder />
            <BusinessCenterOutlinedIcon style={{ fontSize: 44 }} />
            <WorkItemTitle>Data Scientist Intern - Global AI</WorkItemTitle>
            <WorkItemParagraph>
              Deploy interactive application of stock statistics, which allow
              users to specify inputs; research the impacts of COVID-19 on US
              stocks
            </WorkItemParagraph>
          </WorkItem>
          <WorkItem>
            <WorkBorder />
            <BusinessCenterOutlinedIcon style={{ fontSize: 44 }} />
            <WorkItemTitle> iResearch Consulting Group</WorkItemTitle>
            <WorkItemParagraph>
              Generated user experience reports and proposed product improvement
              suggestions through customer reviews using CATI methods
            </WorkItemParagraph>
          </WorkItem>
        </WorkBody>
      </WorkContentContainer>
    </WorkContainer>
  )
}

export default Work

const WorkContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  justify-items: center;
  background-color: #f2f6ff;
`

const WorkContentContainer = styled.div`
  width: 66.66%;
  margin-top: 150px;
`

const WorkHeader = styled.div`
  display: grid;
  row-gap: 44px;
`

const WorkTitle = styled.div`
  font-family: Spartan, sans-serif;
  font-size: 32px;
  line-height: 36px;
  font-weight: 700;
  text-transform: none;
`

const WorkParagraph = styled.div`
  width: 60%;
  /* margin-bottom: 16px; */
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  line-height: 22px;
  text-align: left;
`

const WorkBody = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 60px;
`

const WorkItem = styled.div`
  position: relative;
  padding: 40px 20px 80px 60px;
  display: grid;
  align-content: flex-start;
  row-gap: 20px;

  background-color: #ffffff;

  :hover {
    cursor: pointer;
  }
`

const WorkBorder = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 20px;
  left: 20px;
  border: 1px solid #000000;
`

const WorkItemTitle = styled.div`
  /* margin-top: 20px; */
  font-family: Spartan, sans-serif;
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
`

const WorkItemParagraph = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  line-height: 22px;
  text-align: left;
`
