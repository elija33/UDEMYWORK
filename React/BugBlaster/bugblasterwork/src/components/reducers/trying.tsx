import React, { useState, type SetStateAction } from "react";
import { MdsTile, MdsButton } from "@mds/react";
import styles from "../MessageDeliveryTile/MessageDeliveryTile.module.scss";
import SelectWrapper from "../../shared/SelectWrapper";
import { StringConstants } from "../AddSegmentsSlideIn/AddSegmentsSlideIn.constants";
import { getOfferDropDownItems } from "../AddSegmentsSlideIn/AddSegmentsSlideIn.utils";
import { campaignDetailState } from "../SegmentsWrapperStore";
import { useRecoilValue } from "recoil";
import type { Segment } from "@mrktconnect/marketing-connect-audience-client";
import AudienceTextWrapper from "../../shared/AudienceTextWrapper";

interface SegmentsTargetingInstructionsAttributeSetProps {
  tileIndex: number;
  formValues: Segment;
  setFormValues: React.Dispatch<SetStateAction<Segment>>;
}  const emptyAttributeSet: AttributeSet = { 	attributes: [] } 
function SegmentsAttributeSet({ tileIndex, formValues, setFormValues}: SegmentsTargetingInstructionsAttributeSetProps) { 
 const audienceDetails = useRecoilValue(audienceDetailsState);  
  const [attributeSets, setAttributeSets] = useState<AttributeSet[]>(segmentObject?.attributeTargetingInstructions || [emptyAttributeSet]) 
  
const handleInput = (propertyName: string, event: any) => {
    setSegmentObject{
      …segmentObject,
      [propertyName]: event?.target?.value,
    });
  };

 const handleRemoveAttribute = (index: number) => {
    setAttributeSets(prev => prev.filter((set, setIndex) =>  index !== setIndex)) }

const handleAttributes = (event: any) => { 	console.log(“|| event”, event) 	setSegmentObject( 		{ 	      …segmentObject,
	     attributeTargetingInstructions: attributeSets, 	}
   ) } 
 const handleAddAttribute = () => { setAttributeSets(prev => [...prev, emptyAttributeSet]); };

const attributeKeyValues = audienceDetails?.attributes?.offerId?.map(attr => { 	return {code : attr, description: attr} as KeyValue
})
 
  return (
    <>
      <div className={‘mds-mt-4’}>
        <MdsTile tileStyle="next">
          <div slot="tile-contents">
            <p className={styles.heading}>Attribute set {tileIndex}</p>
            
            {attributeSets?.map(
		(set, index) => (
                <div key={index}>
                  <div className={`mds-d-flex mds-fd-row ${styles.inputBox}`}>
                    <div className={styles.tileContent}>
                      <SelectWrapper
                        	label={`${StringConstants.audience.label} ${index + 1}`}
				errorMessage={StringConstants.audience.errorMessage}
				placeholder={StringConstants.audience.placeholder}
				dataTestId={StringConstants.audience.id}
                        	options={attributeKeyValues?.length ? attributeKeyValues : [] as KeyValue[]}
				index={index}
                        	isError={false}
                        	handleOnChange={handleAttributes}
                      />
                    </div>
                    <div className={styles.tileContent}>
                      <AudienceTextWrapper
                        textConstants={StringConstants.segmentNameId}
                        handleInput={handleInput}
                        value={segmentObject?.segmentName}
                      />
                    </div>
                  </div> 		  {attributeSets?.length > 1 && (
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem'}}>
                    <MdsButton  			     id="styles.mds-button__secondary__leading-icon”
			     data-testid={‘removeTile’}
                      	     variant="secondary"
                             text="Remove" 
                             iconType="ico_trash_can"
                             iconAccessibleDescription="Remove attribute set"
                             iconPosition="leading"
                             onClick={() => handleRemoveAttribute(index)}
                    />
                  </div>
		     )}
                </div>
              )
            )}
            <div className="mds-d-flex mds-jc-flex-start mds-ai-flex-start mds-mt-4">
              <div style={{ display: "flex", alignItems: "center" }}>
                <MdsButton
                  	small
                  	data-testid={‘addAnotherNestedRule’}
                  	variant="tertiary"
                  	iconType="ico_add_circle"
                  	iconPosition="leading"
			text={“Add audience attribute”}
                  	onClick={handleAddAttribute}
                     />
              </div>
            </div>
          </div>
        </MdsTile>
      </div>
    </>
  );
}

export default SegmentsAttributeSet;

