import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot, useRecoilValue } from "recoil";
import SegmentsAttributeSet from "./SegmentsAttributeSet";
import { audienceDetailsState } from "../SegmentsWrapperStore";

// Mock the dependencies
jest.mock("recoil", () => ({
  ...jest.requireActual("recoil"),
  useRecoilValue: jest.fn(),
}));

jest.mock("@mds/react", () => ({
  MdsTile: ({ children }) => <div data-testid="mds-tile">{children}</div>,
  MdsButton: ({ onClick, text, "data-testid": testId }) => (
    <button data-testid={testId} onClick={onClick}>
      {text}
    </button>
  ),
}));

jest.mock("../../shared/SelectWrapper", () => ({
  __esModule: true,
  default: ({ handleOnChange, label, options }) => (
    <select
      data-testid="select-wrapper"
      onChange={handleOnChange}
      aria-label={label}
    >
      {options.map((option, index) => (
        <option key={index} value={option.code}>
          {option.description}
        </option>
      ))}
    </select>
  ),
}));

jest.mock("../../shared/AudienceTextWrapper", () => ({
  __esModule: true,
  default: ({ handleInput, value }) => (
    <input
      data-testid="audience-text-wrapper"
      onChange={(e) => handleInput("segmentName", e)}
      value={value}
    />
  ),
}));

describe("SegmentsAttributeSet", () => {
  const mockSetSegmentObject = jest.fn();
  const defaultProps = {
    tileIndex: 1,
    segmentObject: {
      segmentName: "Test Segment",
      attributeTargetingInstructions: [],
    },
    setSegmentObject: mockSetSegmentObject,
  };

  const mockAudienceDetails = {
    attributes: {
      offerId: ["offer1", "offer2"],
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useRecoilValue as jest.Mock).mockReturnValue(mockAudienceDetails);
  });

  it("renders without crashing", () => {
    render(
      <RecoilRoot>
        <SegmentsAttributeSet {...defaultProps} />
      </RecoilRoot>
    );

    expect(screen.getByTestId("mds-tile")).toBeInTheDocument();
  });

  it("displays correct tile index in heading", () => {
    render(
      <RecoilRoot>
        <SegmentsAttributeSet {...defaultProps} />
      </RecoilRoot>
    );

    expect(
      screen.getByText(`Attribute set ${defaultProps.tileIndex}`)
    ).toBeInTheDocument();
  });

  it("adds new attribute set when clicking add button", () => {
    render(
      <RecoilRoot>
        <SegmentsAttributeSet {...defaultProps} />
      </RecoilRoot>
    );

    const addButton = screen.getByTestId("addAnotherNestedRule");
    fireEvent.click(addButton);

    // Check if a new select wrapper is added
    const selectWrappers = screen.getAllByTestId("select-wrapper");
    expect(selectWrappers).toHaveLength(2);
  });

  it("removes attribute set when clicking remove button", () => {
    const propsWithMultipleAttributes = {
      ...defaultProps,
      segmentObject: {
        ...defaultProps.segmentObject,
        attributeTargetingInstructions: [
          { attributes: [] },
          { attributes: [] },
        ],
      },
    };

    render(
      <RecoilRoot>
        <SegmentsAttributeSet {...propsWithMultipleAttributes} />
      </RecoilRoot>
    );

    const removeButtons = screen.getAllByTestId("removeTile");
    fireEvent.click(removeButtons[0]);

    // Check if an attribute set is removed
    const selectWrappers = screen.getAllByTestId("select-wrapper");
    expect(selectWrappers).toHaveLength(1);
  });

  it("handles input changes in AudienceTextWrapper", () => {
    render(
      <RecoilRoot>
        <SegmentsAttributeSet {...defaultProps} />
      </RecoilRoot>
    );

    const input = screen.getByTestId("audience-text-wrapper");
    fireEvent.change(input, { target: { value: "New Segment Name" } });

    expect(mockSetSegmentObject).toHaveBeenCalledWith({
      ...defaultProps.segmentObject,
      segmentName: "New Segment Name",
    });
  });

  it("handles attribute selection changes", () => {
    render(
      <RecoilRoot>
        <SegmentsAttributeSet {...defaultProps} />
      </RecoilRoot>
    );

    const select = screen.getByTestId("select-wrapper");
    fireEvent.change(select, { target: { value: "offer1" } });

    expect(mockSetSegmentObject).toHaveBeenCalled();
  });

  it("does not show remove button when only one attribute set exists", () => {
    render(
      <RecoilRoot>
        <SegmentsAttributeSet {...defaultProps} />
      </RecoilRoot>
    );

    const removeButtons = screen.queryAllByTestId("removeTile");
    expect(removeButtons).toHaveLength(0);
  });
});
