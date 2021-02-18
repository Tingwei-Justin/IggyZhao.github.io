import React from "react"
import styled from "styled-components/macro"
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined"

function Research() {
  return (
    <ResearchContainer id="research">
      <ResearchContentContainer>
        <ResearchHeader>
          <ResearchTitle>Research</ResearchTitle>
          <ResearchParagraph>
            I create marketing strategies for companies that want to offer more
            than just an interesting service or a pretty product. My
            community-first focus ensures that companies engage with their
            target audience through the most impactful channels.
          </ResearchParagraph>
        </ResearchHeader>

        <ResearchBody>
          {/* 之后用export的方式自动化导入 左右 布局 */}
          <ResearchItem>
            <ResearchBorder />
            <SchoolOutlinedIcon style={{ fontSize: 44 }} />
            <ResearchItemTitle>University of Connecticut</ResearchItemTitle>
            <ResearchItemParagraph>
              Investigate differential effects of process- and outcome-oriented
              reviews on the sales of cosmetic procedures through deep learning
              techniques
            </ResearchItemParagraph>
          </ResearchItem>

          <ResearchItem>
            <ResearchBorder />
            <SchoolOutlinedIcon style={{ fontSize: 44 }} />
            <ResearchItemTitle>Peking University</ResearchItemTitle>
            <ResearchItemParagraph>
              Visited 268 enterprises to conduct questionnaires to study the
              achievements and influences of industrial upgrading and structural
              transformation of manufacturing sectors in China
            </ResearchItemParagraph>
          </ResearchItem>
          <ResearchItem>
            <ResearchBorder />
            <SchoolOutlinedIcon style={{ fontSize: 44 }} />
            <ResearchItemTitle>University of Nottingham</ResearchItemTitle>
            <ResearchItemParagraph>
              Investiage the impact of poverty alleviation policies on the
              living standards of residents in eight impoverished areas in China
            </ResearchItemParagraph>
          </ResearchItem>
        </ResearchBody>
      </ResearchContentContainer>
    </ResearchContainer>
  )
}

export default Research

const ResearchContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  justify-items: center;
  background-color: white;
`

const ResearchContentContainer = styled.div`
  width: 66.66%;
  margin-top: 150px;
`

const ResearchHeader = styled.div`
  display: grid;
  row-gap: 44px;
`

const ResearchTitle = styled.div`
  font-family: Spartan, sans-serif;
  font-size: 32px;
  line-height: 36px;
  font-weight: 700;
  text-transform: none;
`

const ResearchParagraph = styled.div`
  width: 60%;
  /* margin-bottom: 16px; */
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  line-height: 22px;
  text-align: left;
`

const ResearchBody = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 60px;
`

const ResearchItem = styled.div`
  position: relative;
  padding: 40px 20px 80px 60px;
  display: grid;
  align-content: flex-start;
  row-gap: 20px;

  background-color: #f2f6ff;

  :hover {
    cursor: pointer;
  }
`

const ResearchBorder = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 20px;
  left: 20px;
  border: 1px solid #000000;
`

const ResearchItemTitle = styled.div`
  /* margin-top: 20px; */
  font-family: Spartan, sans-serif;
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
`

const ResearchItemParagraph = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  line-height: 22px;
  text-align: left;
`
