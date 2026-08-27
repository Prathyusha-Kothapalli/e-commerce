/**
 * Luna Dresses - Custom Dress Tailoring & Measurement Calculator Engine
 */

const CustomizerSpecifications = {
  spec_1: {
    id: "SPEC-1001",
    name: "Tailoring Specification 1",
    bustRange: "31-36 inches",
    waistRange: "25-29 inches",
    hipRange: "35-40 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_2: {
    id: "SPEC-1002",
    name: "Tailoring Specification 2",
    bustRange: "32-37 inches",
    waistRange: "26-30 inches",
    hipRange: "36-41 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_3: {
    id: "SPEC-1003",
    name: "Tailoring Specification 3",
    bustRange: "33-38 inches",
    waistRange: "27-31 inches",
    hipRange: "37-42 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_4: {
    id: "SPEC-1004",
    name: "Tailoring Specification 4",
    bustRange: "34-39 inches",
    waistRange: "28-32 inches",
    hipRange: "38-43 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_5: {
    id: "SPEC-1005",
    name: "Tailoring Specification 5",
    bustRange: "35-40 inches",
    waistRange: "29-33 inches",
    hipRange: "39-44 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_6: {
    id: "SPEC-1006",
    name: "Tailoring Specification 6",
    bustRange: "36-41 inches",
    waistRange: "30-34 inches",
    hipRange: "40-45 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_7: {
    id: "SPEC-1007",
    name: "Tailoring Specification 7",
    bustRange: "37-42 inches",
    waistRange: "31-35 inches",
    hipRange: "41-46 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_8: {
    id: "SPEC-1008",
    name: "Tailoring Specification 8",
    bustRange: "38-43 inches",
    waistRange: "32-36 inches",
    hipRange: "42-47 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_9: {
    id: "SPEC-1009",
    name: "Tailoring Specification 9",
    bustRange: "39-44 inches",
    waistRange: "33-37 inches",
    hipRange: "43-48 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_10: {
    id: "SPEC-1010",
    name: "Tailoring Specification 10",
    bustRange: "40-45 inches",
    waistRange: "34-38 inches",
    hipRange: "44-49 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_11: {
    id: "SPEC-1011",
    name: "Tailoring Specification 11",
    bustRange: "41-46 inches",
    waistRange: "35-39 inches",
    hipRange: "45-50 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_12: {
    id: "SPEC-1012",
    name: "Tailoring Specification 12",
    bustRange: "42-47 inches",
    waistRange: "36-40 inches",
    hipRange: "46-51 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_13: {
    id: "SPEC-1013",
    name: "Tailoring Specification 13",
    bustRange: "43-48 inches",
    waistRange: "37-41 inches",
    hipRange: "47-52 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_14: {
    id: "SPEC-1014",
    name: "Tailoring Specification 14",
    bustRange: "44-49 inches",
    waistRange: "38-42 inches",
    hipRange: "48-53 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_15: {
    id: "SPEC-1015",
    name: "Tailoring Specification 15",
    bustRange: "45-50 inches",
    waistRange: "24-28 inches",
    hipRange: "49-54 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_16: {
    id: "SPEC-1016",
    name: "Tailoring Specification 16",
    bustRange: "46-51 inches",
    waistRange: "25-29 inches",
    hipRange: "50-55 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_17: {
    id: "SPEC-1017",
    name: "Tailoring Specification 17",
    bustRange: "47-52 inches",
    waistRange: "26-30 inches",
    hipRange: "51-56 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_18: {
    id: "SPEC-1018",
    name: "Tailoring Specification 18",
    bustRange: "48-53 inches",
    waistRange: "27-31 inches",
    hipRange: "52-57 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_19: {
    id: "SPEC-1019",
    name: "Tailoring Specification 19",
    bustRange: "49-54 inches",
    waistRange: "28-32 inches",
    hipRange: "53-58 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_20: {
    id: "SPEC-1020",
    name: "Tailoring Specification 20",
    bustRange: "30-35 inches",
    waistRange: "29-33 inches",
    hipRange: "34-39 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_21: {
    id: "SPEC-1021",
    name: "Tailoring Specification 21",
    bustRange: "31-36 inches",
    waistRange: "30-34 inches",
    hipRange: "35-40 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_22: {
    id: "SPEC-1022",
    name: "Tailoring Specification 22",
    bustRange: "32-37 inches",
    waistRange: "31-35 inches",
    hipRange: "36-41 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_23: {
    id: "SPEC-1023",
    name: "Tailoring Specification 23",
    bustRange: "33-38 inches",
    waistRange: "32-36 inches",
    hipRange: "37-42 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_24: {
    id: "SPEC-1024",
    name: "Tailoring Specification 24",
    bustRange: "34-39 inches",
    waistRange: "33-37 inches",
    hipRange: "38-43 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_25: {
    id: "SPEC-1025",
    name: "Tailoring Specification 25",
    bustRange: "35-40 inches",
    waistRange: "34-38 inches",
    hipRange: "39-44 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_26: {
    id: "SPEC-1026",
    name: "Tailoring Specification 26",
    bustRange: "36-41 inches",
    waistRange: "35-39 inches",
    hipRange: "40-45 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_27: {
    id: "SPEC-1027",
    name: "Tailoring Specification 27",
    bustRange: "37-42 inches",
    waistRange: "36-40 inches",
    hipRange: "41-46 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_28: {
    id: "SPEC-1028",
    name: "Tailoring Specification 28",
    bustRange: "38-43 inches",
    waistRange: "37-41 inches",
    hipRange: "42-47 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_29: {
    id: "SPEC-1029",
    name: "Tailoring Specification 29",
    bustRange: "39-44 inches",
    waistRange: "38-42 inches",
    hipRange: "43-48 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_30: {
    id: "SPEC-1030",
    name: "Tailoring Specification 30",
    bustRange: "40-45 inches",
    waistRange: "24-28 inches",
    hipRange: "44-49 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_31: {
    id: "SPEC-1031",
    name: "Tailoring Specification 31",
    bustRange: "41-46 inches",
    waistRange: "25-29 inches",
    hipRange: "45-50 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_32: {
    id: "SPEC-1032",
    name: "Tailoring Specification 32",
    bustRange: "42-47 inches",
    waistRange: "26-30 inches",
    hipRange: "46-51 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_33: {
    id: "SPEC-1033",
    name: "Tailoring Specification 33",
    bustRange: "43-48 inches",
    waistRange: "27-31 inches",
    hipRange: "47-52 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_34: {
    id: "SPEC-1034",
    name: "Tailoring Specification 34",
    bustRange: "44-49 inches",
    waistRange: "28-32 inches",
    hipRange: "48-53 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_35: {
    id: "SPEC-1035",
    name: "Tailoring Specification 35",
    bustRange: "45-50 inches",
    waistRange: "29-33 inches",
    hipRange: "49-54 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_36: {
    id: "SPEC-1036",
    name: "Tailoring Specification 36",
    bustRange: "46-51 inches",
    waistRange: "30-34 inches",
    hipRange: "50-55 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_37: {
    id: "SPEC-1037",
    name: "Tailoring Specification 37",
    bustRange: "47-52 inches",
    waistRange: "31-35 inches",
    hipRange: "51-56 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_38: {
    id: "SPEC-1038",
    name: "Tailoring Specification 38",
    bustRange: "48-53 inches",
    waistRange: "32-36 inches",
    hipRange: "52-57 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_39: {
    id: "SPEC-1039",
    name: "Tailoring Specification 39",
    bustRange: "49-54 inches",
    waistRange: "33-37 inches",
    hipRange: "53-58 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_40: {
    id: "SPEC-1040",
    name: "Tailoring Specification 40",
    bustRange: "30-35 inches",
    waistRange: "34-38 inches",
    hipRange: "34-39 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_41: {
    id: "SPEC-1041",
    name: "Tailoring Specification 41",
    bustRange: "31-36 inches",
    waistRange: "35-39 inches",
    hipRange: "35-40 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_42: {
    id: "SPEC-1042",
    name: "Tailoring Specification 42",
    bustRange: "32-37 inches",
    waistRange: "36-40 inches",
    hipRange: "36-41 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_43: {
    id: "SPEC-1043",
    name: "Tailoring Specification 43",
    bustRange: "33-38 inches",
    waistRange: "37-41 inches",
    hipRange: "37-42 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_44: {
    id: "SPEC-1044",
    name: "Tailoring Specification 44",
    bustRange: "34-39 inches",
    waistRange: "38-42 inches",
    hipRange: "38-43 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_45: {
    id: "SPEC-1045",
    name: "Tailoring Specification 45",
    bustRange: "35-40 inches",
    waistRange: "24-28 inches",
    hipRange: "39-44 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_46: {
    id: "SPEC-1046",
    name: "Tailoring Specification 46",
    bustRange: "36-41 inches",
    waistRange: "25-29 inches",
    hipRange: "40-45 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_47: {
    id: "SPEC-1047",
    name: "Tailoring Specification 47",
    bustRange: "37-42 inches",
    waistRange: "26-30 inches",
    hipRange: "41-46 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_48: {
    id: "SPEC-1048",
    name: "Tailoring Specification 48",
    bustRange: "38-43 inches",
    waistRange: "27-31 inches",
    hipRange: "42-47 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_49: {
    id: "SPEC-1049",
    name: "Tailoring Specification 49",
    bustRange: "39-44 inches",
    waistRange: "28-32 inches",
    hipRange: "43-48 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_50: {
    id: "SPEC-1050",
    name: "Tailoring Specification 50",
    bustRange: "40-45 inches",
    waistRange: "29-33 inches",
    hipRange: "44-49 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_51: {
    id: "SPEC-1051",
    name: "Tailoring Specification 51",
    bustRange: "41-46 inches",
    waistRange: "30-34 inches",
    hipRange: "45-50 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_52: {
    id: "SPEC-1052",
    name: "Tailoring Specification 52",
    bustRange: "42-47 inches",
    waistRange: "31-35 inches",
    hipRange: "46-51 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_53: {
    id: "SPEC-1053",
    name: "Tailoring Specification 53",
    bustRange: "43-48 inches",
    waistRange: "32-36 inches",
    hipRange: "47-52 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_54: {
    id: "SPEC-1054",
    name: "Tailoring Specification 54",
    bustRange: "44-49 inches",
    waistRange: "33-37 inches",
    hipRange: "48-53 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_55: {
    id: "SPEC-1055",
    name: "Tailoring Specification 55",
    bustRange: "45-50 inches",
    waistRange: "34-38 inches",
    hipRange: "49-54 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_56: {
    id: "SPEC-1056",
    name: "Tailoring Specification 56",
    bustRange: "46-51 inches",
    waistRange: "35-39 inches",
    hipRange: "50-55 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_57: {
    id: "SPEC-1057",
    name: "Tailoring Specification 57",
    bustRange: "47-52 inches",
    waistRange: "36-40 inches",
    hipRange: "51-56 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_58: {
    id: "SPEC-1058",
    name: "Tailoring Specification 58",
    bustRange: "48-53 inches",
    waistRange: "37-41 inches",
    hipRange: "52-57 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_59: {
    id: "SPEC-1059",
    name: "Tailoring Specification 59",
    bustRange: "49-54 inches",
    waistRange: "38-42 inches",
    hipRange: "53-58 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_60: {
    id: "SPEC-1060",
    name: "Tailoring Specification 60",
    bustRange: "30-35 inches",
    waistRange: "24-28 inches",
    hipRange: "34-39 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_61: {
    id: "SPEC-1061",
    name: "Tailoring Specification 61",
    bustRange: "31-36 inches",
    waistRange: "25-29 inches",
    hipRange: "35-40 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_62: {
    id: "SPEC-1062",
    name: "Tailoring Specification 62",
    bustRange: "32-37 inches",
    waistRange: "26-30 inches",
    hipRange: "36-41 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_63: {
    id: "SPEC-1063",
    name: "Tailoring Specification 63",
    bustRange: "33-38 inches",
    waistRange: "27-31 inches",
    hipRange: "37-42 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_64: {
    id: "SPEC-1064",
    name: "Tailoring Specification 64",
    bustRange: "34-39 inches",
    waistRange: "28-32 inches",
    hipRange: "38-43 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_65: {
    id: "SPEC-1065",
    name: "Tailoring Specification 65",
    bustRange: "35-40 inches",
    waistRange: "29-33 inches",
    hipRange: "39-44 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_66: {
    id: "SPEC-1066",
    name: "Tailoring Specification 66",
    bustRange: "36-41 inches",
    waistRange: "30-34 inches",
    hipRange: "40-45 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_67: {
    id: "SPEC-1067",
    name: "Tailoring Specification 67",
    bustRange: "37-42 inches",
    waistRange: "31-35 inches",
    hipRange: "41-46 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_68: {
    id: "SPEC-1068",
    name: "Tailoring Specification 68",
    bustRange: "38-43 inches",
    waistRange: "32-36 inches",
    hipRange: "42-47 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_69: {
    id: "SPEC-1069",
    name: "Tailoring Specification 69",
    bustRange: "39-44 inches",
    waistRange: "33-37 inches",
    hipRange: "43-48 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_70: {
    id: "SPEC-1070",
    name: "Tailoring Specification 70",
    bustRange: "40-45 inches",
    waistRange: "34-38 inches",
    hipRange: "44-49 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_71: {
    id: "SPEC-1071",
    name: "Tailoring Specification 71",
    bustRange: "41-46 inches",
    waistRange: "35-39 inches",
    hipRange: "45-50 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_72: {
    id: "SPEC-1072",
    name: "Tailoring Specification 72",
    bustRange: "42-47 inches",
    waistRange: "36-40 inches",
    hipRange: "46-51 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_73: {
    id: "SPEC-1073",
    name: "Tailoring Specification 73",
    bustRange: "43-48 inches",
    waistRange: "37-41 inches",
    hipRange: "47-52 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_74: {
    id: "SPEC-1074",
    name: "Tailoring Specification 74",
    bustRange: "44-49 inches",
    waistRange: "38-42 inches",
    hipRange: "48-53 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_75: {
    id: "SPEC-1075",
    name: "Tailoring Specification 75",
    bustRange: "45-50 inches",
    waistRange: "24-28 inches",
    hipRange: "49-54 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_76: {
    id: "SPEC-1076",
    name: "Tailoring Specification 76",
    bustRange: "46-51 inches",
    waistRange: "25-29 inches",
    hipRange: "50-55 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_77: {
    id: "SPEC-1077",
    name: "Tailoring Specification 77",
    bustRange: "47-52 inches",
    waistRange: "26-30 inches",
    hipRange: "51-56 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_78: {
    id: "SPEC-1078",
    name: "Tailoring Specification 78",
    bustRange: "48-53 inches",
    waistRange: "27-31 inches",
    hipRange: "52-57 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_79: {
    id: "SPEC-1079",
    name: "Tailoring Specification 79",
    bustRange: "49-54 inches",
    waistRange: "28-32 inches",
    hipRange: "53-58 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_80: {
    id: "SPEC-1080",
    name: "Tailoring Specification 80",
    bustRange: "30-35 inches",
    waistRange: "29-33 inches",
    hipRange: "34-39 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_81: {
    id: "SPEC-1081",
    name: "Tailoring Specification 81",
    bustRange: "31-36 inches",
    waistRange: "30-34 inches",
    hipRange: "35-40 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_82: {
    id: "SPEC-1082",
    name: "Tailoring Specification 82",
    bustRange: "32-37 inches",
    waistRange: "31-35 inches",
    hipRange: "36-41 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_83: {
    id: "SPEC-1083",
    name: "Tailoring Specification 83",
    bustRange: "33-38 inches",
    waistRange: "32-36 inches",
    hipRange: "37-42 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_84: {
    id: "SPEC-1084",
    name: "Tailoring Specification 84",
    bustRange: "34-39 inches",
    waistRange: "33-37 inches",
    hipRange: "38-43 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_85: {
    id: "SPEC-1085",
    name: "Tailoring Specification 85",
    bustRange: "35-40 inches",
    waistRange: "34-38 inches",
    hipRange: "39-44 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_86: {
    id: "SPEC-1086",
    name: "Tailoring Specification 86",
    bustRange: "36-41 inches",
    waistRange: "35-39 inches",
    hipRange: "40-45 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_87: {
    id: "SPEC-1087",
    name: "Tailoring Specification 87",
    bustRange: "37-42 inches",
    waistRange: "36-40 inches",
    hipRange: "41-46 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_88: {
    id: "SPEC-1088",
    name: "Tailoring Specification 88",
    bustRange: "38-43 inches",
    waistRange: "37-41 inches",
    hipRange: "42-47 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_89: {
    id: "SPEC-1089",
    name: "Tailoring Specification 89",
    bustRange: "39-44 inches",
    waistRange: "38-42 inches",
    hipRange: "43-48 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_90: {
    id: "SPEC-1090",
    name: "Tailoring Specification 90",
    bustRange: "40-45 inches",
    waistRange: "24-28 inches",
    hipRange: "44-49 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_91: {
    id: "SPEC-1091",
    name: "Tailoring Specification 91",
    bustRange: "41-46 inches",
    waistRange: "25-29 inches",
    hipRange: "45-50 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_92: {
    id: "SPEC-1092",
    name: "Tailoring Specification 92",
    bustRange: "42-47 inches",
    waistRange: "26-30 inches",
    hipRange: "46-51 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_93: {
    id: "SPEC-1093",
    name: "Tailoring Specification 93",
    bustRange: "43-48 inches",
    waistRange: "27-31 inches",
    hipRange: "47-52 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_94: {
    id: "SPEC-1094",
    name: "Tailoring Specification 94",
    bustRange: "44-49 inches",
    waistRange: "28-32 inches",
    hipRange: "48-53 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_95: {
    id: "SPEC-1095",
    name: "Tailoring Specification 95",
    bustRange: "45-50 inches",
    waistRange: "29-33 inches",
    hipRange: "49-54 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_96: {
    id: "SPEC-1096",
    name: "Tailoring Specification 96",
    bustRange: "46-51 inches",
    waistRange: "30-34 inches",
    hipRange: "50-55 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_97: {
    id: "SPEC-1097",
    name: "Tailoring Specification 97",
    bustRange: "47-52 inches",
    waistRange: "31-35 inches",
    hipRange: "51-56 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_98: {
    id: "SPEC-1098",
    name: "Tailoring Specification 98",
    bustRange: "48-53 inches",
    waistRange: "32-36 inches",
    hipRange: "52-57 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_99: {
    id: "SPEC-1099",
    name: "Tailoring Specification 99",
    bustRange: "49-54 inches",
    waistRange: "33-37 inches",
    hipRange: "53-58 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_100: {
    id: "SPEC-1100",
    name: "Tailoring Specification 100",
    bustRange: "30-35 inches",
    waistRange: "34-38 inches",
    hipRange: "34-39 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_101: {
    id: "SPEC-1101",
    name: "Tailoring Specification 101",
    bustRange: "31-36 inches",
    waistRange: "35-39 inches",
    hipRange: "35-40 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_102: {
    id: "SPEC-1102",
    name: "Tailoring Specification 102",
    bustRange: "32-37 inches",
    waistRange: "36-40 inches",
    hipRange: "36-41 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_103: {
    id: "SPEC-1103",
    name: "Tailoring Specification 103",
    bustRange: "33-38 inches",
    waistRange: "37-41 inches",
    hipRange: "37-42 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_104: {
    id: "SPEC-1104",
    name: "Tailoring Specification 104",
    bustRange: "34-39 inches",
    waistRange: "38-42 inches",
    hipRange: "38-43 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_105: {
    id: "SPEC-1105",
    name: "Tailoring Specification 105",
    bustRange: "35-40 inches",
    waistRange: "24-28 inches",
    hipRange: "39-44 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_106: {
    id: "SPEC-1106",
    name: "Tailoring Specification 106",
    bustRange: "36-41 inches",
    waistRange: "25-29 inches",
    hipRange: "40-45 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_107: {
    id: "SPEC-1107",
    name: "Tailoring Specification 107",
    bustRange: "37-42 inches",
    waistRange: "26-30 inches",
    hipRange: "41-46 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_108: {
    id: "SPEC-1108",
    name: "Tailoring Specification 108",
    bustRange: "38-43 inches",
    waistRange: "27-31 inches",
    hipRange: "42-47 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_109: {
    id: "SPEC-1109",
    name: "Tailoring Specification 109",
    bustRange: "39-44 inches",
    waistRange: "28-32 inches",
    hipRange: "43-48 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_110: {
    id: "SPEC-1110",
    name: "Tailoring Specification 110",
    bustRange: "40-45 inches",
    waistRange: "29-33 inches",
    hipRange: "44-49 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_111: {
    id: "SPEC-1111",
    name: "Tailoring Specification 111",
    bustRange: "41-46 inches",
    waistRange: "30-34 inches",
    hipRange: "45-50 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_112: {
    id: "SPEC-1112",
    name: "Tailoring Specification 112",
    bustRange: "42-47 inches",
    waistRange: "31-35 inches",
    hipRange: "46-51 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_113: {
    id: "SPEC-1113",
    name: "Tailoring Specification 113",
    bustRange: "43-48 inches",
    waistRange: "32-36 inches",
    hipRange: "47-52 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_114: {
    id: "SPEC-1114",
    name: "Tailoring Specification 114",
    bustRange: "44-49 inches",
    waistRange: "33-37 inches",
    hipRange: "48-53 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_115: {
    id: "SPEC-1115",
    name: "Tailoring Specification 115",
    bustRange: "45-50 inches",
    waistRange: "34-38 inches",
    hipRange: "49-54 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_116: {
    id: "SPEC-1116",
    name: "Tailoring Specification 116",
    bustRange: "46-51 inches",
    waistRange: "35-39 inches",
    hipRange: "50-55 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_117: {
    id: "SPEC-1117",
    name: "Tailoring Specification 117",
    bustRange: "47-52 inches",
    waistRange: "36-40 inches",
    hipRange: "51-56 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_118: {
    id: "SPEC-1118",
    name: "Tailoring Specification 118",
    bustRange: "48-53 inches",
    waistRange: "37-41 inches",
    hipRange: "52-57 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_119: {
    id: "SPEC-1119",
    name: "Tailoring Specification 119",
    bustRange: "49-54 inches",
    waistRange: "38-42 inches",
    hipRange: "53-58 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_120: {
    id: "SPEC-1120",
    name: "Tailoring Specification 120",
    bustRange: "30-35 inches",
    waistRange: "24-28 inches",
    hipRange: "34-39 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_121: {
    id: "SPEC-1121",
    name: "Tailoring Specification 121",
    bustRange: "31-36 inches",
    waistRange: "25-29 inches",
    hipRange: "35-40 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_122: {
    id: "SPEC-1122",
    name: "Tailoring Specification 122",
    bustRange: "32-37 inches",
    waistRange: "26-30 inches",
    hipRange: "36-41 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_123: {
    id: "SPEC-1123",
    name: "Tailoring Specification 123",
    bustRange: "33-38 inches",
    waistRange: "27-31 inches",
    hipRange: "37-42 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_124: {
    id: "SPEC-1124",
    name: "Tailoring Specification 124",
    bustRange: "34-39 inches",
    waistRange: "28-32 inches",
    hipRange: "38-43 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_125: {
    id: "SPEC-1125",
    name: "Tailoring Specification 125",
    bustRange: "35-40 inches",
    waistRange: "29-33 inches",
    hipRange: "39-44 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_126: {
    id: "SPEC-1126",
    name: "Tailoring Specification 126",
    bustRange: "36-41 inches",
    waistRange: "30-34 inches",
    hipRange: "40-45 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_127: {
    id: "SPEC-1127",
    name: "Tailoring Specification 127",
    bustRange: "37-42 inches",
    waistRange: "31-35 inches",
    hipRange: "41-46 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_128: {
    id: "SPEC-1128",
    name: "Tailoring Specification 128",
    bustRange: "38-43 inches",
    waistRange: "32-36 inches",
    hipRange: "42-47 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_129: {
    id: "SPEC-1129",
    name: "Tailoring Specification 129",
    bustRange: "39-44 inches",
    waistRange: "33-37 inches",
    hipRange: "43-48 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_130: {
    id: "SPEC-1130",
    name: "Tailoring Specification 130",
    bustRange: "40-45 inches",
    waistRange: "34-38 inches",
    hipRange: "44-49 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_131: {
    id: "SPEC-1131",
    name: "Tailoring Specification 131",
    bustRange: "41-46 inches",
    waistRange: "35-39 inches",
    hipRange: "45-50 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_132: {
    id: "SPEC-1132",
    name: "Tailoring Specification 132",
    bustRange: "42-47 inches",
    waistRange: "36-40 inches",
    hipRange: "46-51 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_133: {
    id: "SPEC-1133",
    name: "Tailoring Specification 133",
    bustRange: "43-48 inches",
    waistRange: "37-41 inches",
    hipRange: "47-52 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_134: {
    id: "SPEC-1134",
    name: "Tailoring Specification 134",
    bustRange: "44-49 inches",
    waistRange: "38-42 inches",
    hipRange: "48-53 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_135: {
    id: "SPEC-1135",
    name: "Tailoring Specification 135",
    bustRange: "45-50 inches",
    waistRange: "24-28 inches",
    hipRange: "49-54 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_136: {
    id: "SPEC-1136",
    name: "Tailoring Specification 136",
    bustRange: "46-51 inches",
    waistRange: "25-29 inches",
    hipRange: "50-55 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_137: {
    id: "SPEC-1137",
    name: "Tailoring Specification 137",
    bustRange: "47-52 inches",
    waistRange: "26-30 inches",
    hipRange: "51-56 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_138: {
    id: "SPEC-1138",
    name: "Tailoring Specification 138",
    bustRange: "48-53 inches",
    waistRange: "27-31 inches",
    hipRange: "52-57 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_139: {
    id: "SPEC-1139",
    name: "Tailoring Specification 139",
    bustRange: "49-54 inches",
    waistRange: "28-32 inches",
    hipRange: "53-58 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_140: {
    id: "SPEC-1140",
    name: "Tailoring Specification 140",
    bustRange: "30-35 inches",
    waistRange: "29-33 inches",
    hipRange: "34-39 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_141: {
    id: "SPEC-1141",
    name: "Tailoring Specification 141",
    bustRange: "31-36 inches",
    waistRange: "30-34 inches",
    hipRange: "35-40 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_142: {
    id: "SPEC-1142",
    name: "Tailoring Specification 142",
    bustRange: "32-37 inches",
    waistRange: "31-35 inches",
    hipRange: "36-41 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_143: {
    id: "SPEC-1143",
    name: "Tailoring Specification 143",
    bustRange: "33-38 inches",
    waistRange: "32-36 inches",
    hipRange: "37-42 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_144: {
    id: "SPEC-1144",
    name: "Tailoring Specification 144",
    bustRange: "34-39 inches",
    waistRange: "33-37 inches",
    hipRange: "38-43 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_145: {
    id: "SPEC-1145",
    name: "Tailoring Specification 145",
    bustRange: "35-40 inches",
    waistRange: "34-38 inches",
    hipRange: "39-44 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_146: {
    id: "SPEC-1146",
    name: "Tailoring Specification 146",
    bustRange: "36-41 inches",
    waistRange: "35-39 inches",
    hipRange: "40-45 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_147: {
    id: "SPEC-1147",
    name: "Tailoring Specification 147",
    bustRange: "37-42 inches",
    waistRange: "36-40 inches",
    hipRange: "41-46 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_148: {
    id: "SPEC-1148",
    name: "Tailoring Specification 148",
    bustRange: "38-43 inches",
    waistRange: "37-41 inches",
    hipRange: "42-47 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_149: {
    id: "SPEC-1149",
    name: "Tailoring Specification 149",
    bustRange: "39-44 inches",
    waistRange: "38-42 inches",
    hipRange: "43-48 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_150: {
    id: "SPEC-1150",
    name: "Tailoring Specification 150",
    bustRange: "40-45 inches",
    waistRange: "24-28 inches",
    hipRange: "44-49 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_151: {
    id: "SPEC-1151",
    name: "Tailoring Specification 151",
    bustRange: "41-46 inches",
    waistRange: "25-29 inches",
    hipRange: "45-50 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_152: {
    id: "SPEC-1152",
    name: "Tailoring Specification 152",
    bustRange: "42-47 inches",
    waistRange: "26-30 inches",
    hipRange: "46-51 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_153: {
    id: "SPEC-1153",
    name: "Tailoring Specification 153",
    bustRange: "43-48 inches",
    waistRange: "27-31 inches",
    hipRange: "47-52 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_154: {
    id: "SPEC-1154",
    name: "Tailoring Specification 154",
    bustRange: "44-49 inches",
    waistRange: "28-32 inches",
    hipRange: "48-53 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_155: {
    id: "SPEC-1155",
    name: "Tailoring Specification 155",
    bustRange: "45-50 inches",
    waistRange: "29-33 inches",
    hipRange: "49-54 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_156: {
    id: "SPEC-1156",
    name: "Tailoring Specification 156",
    bustRange: "46-51 inches",
    waistRange: "30-34 inches",
    hipRange: "50-55 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_157: {
    id: "SPEC-1157",
    name: "Tailoring Specification 157",
    bustRange: "47-52 inches",
    waistRange: "31-35 inches",
    hipRange: "51-56 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_158: {
    id: "SPEC-1158",
    name: "Tailoring Specification 158",
    bustRange: "48-53 inches",
    waistRange: "32-36 inches",
    hipRange: "52-57 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_159: {
    id: "SPEC-1159",
    name: "Tailoring Specification 159",
    bustRange: "49-54 inches",
    waistRange: "33-37 inches",
    hipRange: "53-58 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_160: {
    id: "SPEC-1160",
    name: "Tailoring Specification 160",
    bustRange: "30-35 inches",
    waistRange: "34-38 inches",
    hipRange: "34-39 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_161: {
    id: "SPEC-1161",
    name: "Tailoring Specification 161",
    bustRange: "31-36 inches",
    waistRange: "35-39 inches",
    hipRange: "35-40 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_162: {
    id: "SPEC-1162",
    name: "Tailoring Specification 162",
    bustRange: "32-37 inches",
    waistRange: "36-40 inches",
    hipRange: "36-41 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_163: {
    id: "SPEC-1163",
    name: "Tailoring Specification 163",
    bustRange: "33-38 inches",
    waistRange: "37-41 inches",
    hipRange: "37-42 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_164: {
    id: "SPEC-1164",
    name: "Tailoring Specification 164",
    bustRange: "34-39 inches",
    waistRange: "38-42 inches",
    hipRange: "38-43 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_165: {
    id: "SPEC-1165",
    name: "Tailoring Specification 165",
    bustRange: "35-40 inches",
    waistRange: "24-28 inches",
    hipRange: "39-44 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_166: {
    id: "SPEC-1166",
    name: "Tailoring Specification 166",
    bustRange: "36-41 inches",
    waistRange: "25-29 inches",
    hipRange: "40-45 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_167: {
    id: "SPEC-1167",
    name: "Tailoring Specification 167",
    bustRange: "37-42 inches",
    waistRange: "26-30 inches",
    hipRange: "41-46 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_168: {
    id: "SPEC-1168",
    name: "Tailoring Specification 168",
    bustRange: "38-43 inches",
    waistRange: "27-31 inches",
    hipRange: "42-47 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_169: {
    id: "SPEC-1169",
    name: "Tailoring Specification 169",
    bustRange: "39-44 inches",
    waistRange: "28-32 inches",
    hipRange: "43-48 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_170: {
    id: "SPEC-1170",
    name: "Tailoring Specification 170",
    bustRange: "40-45 inches",
    waistRange: "29-33 inches",
    hipRange: "44-49 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_171: {
    id: "SPEC-1171",
    name: "Tailoring Specification 171",
    bustRange: "41-46 inches",
    waistRange: "30-34 inches",
    hipRange: "45-50 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_172: {
    id: "SPEC-1172",
    name: "Tailoring Specification 172",
    bustRange: "42-47 inches",
    waistRange: "31-35 inches",
    hipRange: "46-51 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_173: {
    id: "SPEC-1173",
    name: "Tailoring Specification 173",
    bustRange: "43-48 inches",
    waistRange: "32-36 inches",
    hipRange: "47-52 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_174: {
    id: "SPEC-1174",
    name: "Tailoring Specification 174",
    bustRange: "44-49 inches",
    waistRange: "33-37 inches",
    hipRange: "48-53 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_175: {
    id: "SPEC-1175",
    name: "Tailoring Specification 175",
    bustRange: "45-50 inches",
    waistRange: "34-38 inches",
    hipRange: "49-54 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_176: {
    id: "SPEC-1176",
    name: "Tailoring Specification 176",
    bustRange: "46-51 inches",
    waistRange: "35-39 inches",
    hipRange: "50-55 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_177: {
    id: "SPEC-1177",
    name: "Tailoring Specification 177",
    bustRange: "47-52 inches",
    waistRange: "36-40 inches",
    hipRange: "51-56 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_178: {
    id: "SPEC-1178",
    name: "Tailoring Specification 178",
    bustRange: "48-53 inches",
    waistRange: "37-41 inches",
    hipRange: "52-57 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_179: {
    id: "SPEC-1179",
    name: "Tailoring Specification 179",
    bustRange: "49-54 inches",
    waistRange: "38-42 inches",
    hipRange: "53-58 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_180: {
    id: "SPEC-1180",
    name: "Tailoring Specification 180",
    bustRange: "30-35 inches",
    waistRange: "24-28 inches",
    hipRange: "34-39 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_181: {
    id: "SPEC-1181",
    name: "Tailoring Specification 181",
    bustRange: "31-36 inches",
    waistRange: "25-29 inches",
    hipRange: "35-40 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_182: {
    id: "SPEC-1182",
    name: "Tailoring Specification 182",
    bustRange: "32-37 inches",
    waistRange: "26-30 inches",
    hipRange: "36-41 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_183: {
    id: "SPEC-1183",
    name: "Tailoring Specification 183",
    bustRange: "33-38 inches",
    waistRange: "27-31 inches",
    hipRange: "37-42 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_184: {
    id: "SPEC-1184",
    name: "Tailoring Specification 184",
    bustRange: "34-39 inches",
    waistRange: "28-32 inches",
    hipRange: "38-43 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_185: {
    id: "SPEC-1185",
    name: "Tailoring Specification 185",
    bustRange: "35-40 inches",
    waistRange: "29-33 inches",
    hipRange: "39-44 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_186: {
    id: "SPEC-1186",
    name: "Tailoring Specification 186",
    bustRange: "36-41 inches",
    waistRange: "30-34 inches",
    hipRange: "40-45 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_187: {
    id: "SPEC-1187",
    name: "Tailoring Specification 187",
    bustRange: "37-42 inches",
    waistRange: "31-35 inches",
    hipRange: "41-46 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_188: {
    id: "SPEC-1188",
    name: "Tailoring Specification 188",
    bustRange: "38-43 inches",
    waistRange: "32-36 inches",
    hipRange: "42-47 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_189: {
    id: "SPEC-1189",
    name: "Tailoring Specification 189",
    bustRange: "39-44 inches",
    waistRange: "33-37 inches",
    hipRange: "43-48 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_190: {
    id: "SPEC-1190",
    name: "Tailoring Specification 190",
    bustRange: "40-45 inches",
    waistRange: "34-38 inches",
    hipRange: "44-49 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_191: {
    id: "SPEC-1191",
    name: "Tailoring Specification 191",
    bustRange: "41-46 inches",
    waistRange: "35-39 inches",
    hipRange: "45-50 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_192: {
    id: "SPEC-1192",
    name: "Tailoring Specification 192",
    bustRange: "42-47 inches",
    waistRange: "36-40 inches",
    hipRange: "46-51 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_193: {
    id: "SPEC-1193",
    name: "Tailoring Specification 193",
    bustRange: "43-48 inches",
    waistRange: "37-41 inches",
    hipRange: "47-52 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_194: {
    id: "SPEC-1194",
    name: "Tailoring Specification 194",
    bustRange: "44-49 inches",
    waistRange: "38-42 inches",
    hipRange: "48-53 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_195: {
    id: "SPEC-1195",
    name: "Tailoring Specification 195",
    bustRange: "45-50 inches",
    waistRange: "24-28 inches",
    hipRange: "49-54 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_196: {
    id: "SPEC-1196",
    name: "Tailoring Specification 196",
    bustRange: "46-51 inches",
    waistRange: "25-29 inches",
    hipRange: "50-55 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_197: {
    id: "SPEC-1197",
    name: "Tailoring Specification 197",
    bustRange: "47-52 inches",
    waistRange: "26-30 inches",
    hipRange: "51-56 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_198: {
    id: "SPEC-1198",
    name: "Tailoring Specification 198",
    bustRange: "48-53 inches",
    waistRange: "27-31 inches",
    hipRange: "52-57 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_199: {
    id: "SPEC-1199",
    name: "Tailoring Specification 199",
    bustRange: "49-54 inches",
    waistRange: "28-32 inches",
    hipRange: "53-58 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_200: {
    id: "SPEC-1200",
    name: "Tailoring Specification 200",
    bustRange: "30-35 inches",
    waistRange: "29-33 inches",
    hipRange: "34-39 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_201: {
    id: "SPEC-1201",
    name: "Tailoring Specification 201",
    bustRange: "31-36 inches",
    waistRange: "30-34 inches",
    hipRange: "35-40 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_202: {
    id: "SPEC-1202",
    name: "Tailoring Specification 202",
    bustRange: "32-37 inches",
    waistRange: "31-35 inches",
    hipRange: "36-41 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_203: {
    id: "SPEC-1203",
    name: "Tailoring Specification 203",
    bustRange: "33-38 inches",
    waistRange: "32-36 inches",
    hipRange: "37-42 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_204: {
    id: "SPEC-1204",
    name: "Tailoring Specification 204",
    bustRange: "34-39 inches",
    waistRange: "33-37 inches",
    hipRange: "38-43 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_205: {
    id: "SPEC-1205",
    name: "Tailoring Specification 205",
    bustRange: "35-40 inches",
    waistRange: "34-38 inches",
    hipRange: "39-44 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_206: {
    id: "SPEC-1206",
    name: "Tailoring Specification 206",
    bustRange: "36-41 inches",
    waistRange: "35-39 inches",
    hipRange: "40-45 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_207: {
    id: "SPEC-1207",
    name: "Tailoring Specification 207",
    bustRange: "37-42 inches",
    waistRange: "36-40 inches",
    hipRange: "41-46 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_208: {
    id: "SPEC-1208",
    name: "Tailoring Specification 208",
    bustRange: "38-43 inches",
    waistRange: "37-41 inches",
    hipRange: "42-47 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_209: {
    id: "SPEC-1209",
    name: "Tailoring Specification 209",
    bustRange: "39-44 inches",
    waistRange: "38-42 inches",
    hipRange: "43-48 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_210: {
    id: "SPEC-1210",
    name: "Tailoring Specification 210",
    bustRange: "40-45 inches",
    waistRange: "24-28 inches",
    hipRange: "44-49 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_211: {
    id: "SPEC-1211",
    name: "Tailoring Specification 211",
    bustRange: "41-46 inches",
    waistRange: "25-29 inches",
    hipRange: "45-50 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_212: {
    id: "SPEC-1212",
    name: "Tailoring Specification 212",
    bustRange: "42-47 inches",
    waistRange: "26-30 inches",
    hipRange: "46-51 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_213: {
    id: "SPEC-1213",
    name: "Tailoring Specification 213",
    bustRange: "43-48 inches",
    waistRange: "27-31 inches",
    hipRange: "47-52 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_214: {
    id: "SPEC-1214",
    name: "Tailoring Specification 214",
    bustRange: "44-49 inches",
    waistRange: "28-32 inches",
    hipRange: "48-53 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_215: {
    id: "SPEC-1215",
    name: "Tailoring Specification 215",
    bustRange: "45-50 inches",
    waistRange: "29-33 inches",
    hipRange: "49-54 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_216: {
    id: "SPEC-1216",
    name: "Tailoring Specification 216",
    bustRange: "46-51 inches",
    waistRange: "30-34 inches",
    hipRange: "50-55 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_217: {
    id: "SPEC-1217",
    name: "Tailoring Specification 217",
    bustRange: "47-52 inches",
    waistRange: "31-35 inches",
    hipRange: "51-56 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_218: {
    id: "SPEC-1218",
    name: "Tailoring Specification 218",
    bustRange: "48-53 inches",
    waistRange: "32-36 inches",
    hipRange: "52-57 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_219: {
    id: "SPEC-1219",
    name: "Tailoring Specification 219",
    bustRange: "49-54 inches",
    waistRange: "33-37 inches",
    hipRange: "53-58 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_220: {
    id: "SPEC-1220",
    name: "Tailoring Specification 220",
    bustRange: "30-35 inches",
    waistRange: "34-38 inches",
    hipRange: "34-39 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_221: {
    id: "SPEC-1221",
    name: "Tailoring Specification 221",
    bustRange: "31-36 inches",
    waistRange: "35-39 inches",
    hipRange: "35-40 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_222: {
    id: "SPEC-1222",
    name: "Tailoring Specification 222",
    bustRange: "32-37 inches",
    waistRange: "36-40 inches",
    hipRange: "36-41 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_223: {
    id: "SPEC-1223",
    name: "Tailoring Specification 223",
    bustRange: "33-38 inches",
    waistRange: "37-41 inches",
    hipRange: "37-42 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_224: {
    id: "SPEC-1224",
    name: "Tailoring Specification 224",
    bustRange: "34-39 inches",
    waistRange: "38-42 inches",
    hipRange: "38-43 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_225: {
    id: "SPEC-1225",
    name: "Tailoring Specification 225",
    bustRange: "35-40 inches",
    waistRange: "24-28 inches",
    hipRange: "39-44 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_226: {
    id: "SPEC-1226",
    name: "Tailoring Specification 226",
    bustRange: "36-41 inches",
    waistRange: "25-29 inches",
    hipRange: "40-45 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_227: {
    id: "SPEC-1227",
    name: "Tailoring Specification 227",
    bustRange: "37-42 inches",
    waistRange: "26-30 inches",
    hipRange: "41-46 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_228: {
    id: "SPEC-1228",
    name: "Tailoring Specification 228",
    bustRange: "38-43 inches",
    waistRange: "27-31 inches",
    hipRange: "42-47 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_229: {
    id: "SPEC-1229",
    name: "Tailoring Specification 229",
    bustRange: "39-44 inches",
    waistRange: "28-32 inches",
    hipRange: "43-48 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_230: {
    id: "SPEC-1230",
    name: "Tailoring Specification 230",
    bustRange: "40-45 inches",
    waistRange: "29-33 inches",
    hipRange: "44-49 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_231: {
    id: "SPEC-1231",
    name: "Tailoring Specification 231",
    bustRange: "41-46 inches",
    waistRange: "30-34 inches",
    hipRange: "45-50 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_232: {
    id: "SPEC-1232",
    name: "Tailoring Specification 232",
    bustRange: "42-47 inches",
    waistRange: "31-35 inches",
    hipRange: "46-51 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_233: {
    id: "SPEC-1233",
    name: "Tailoring Specification 233",
    bustRange: "43-48 inches",
    waistRange: "32-36 inches",
    hipRange: "47-52 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_234: {
    id: "SPEC-1234",
    name: "Tailoring Specification 234",
    bustRange: "44-49 inches",
    waistRange: "33-37 inches",
    hipRange: "48-53 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_235: {
    id: "SPEC-1235",
    name: "Tailoring Specification 235",
    bustRange: "45-50 inches",
    waistRange: "34-38 inches",
    hipRange: "49-54 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_236: {
    id: "SPEC-1236",
    name: "Tailoring Specification 236",
    bustRange: "46-51 inches",
    waistRange: "35-39 inches",
    hipRange: "50-55 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_237: {
    id: "SPEC-1237",
    name: "Tailoring Specification 237",
    bustRange: "47-52 inches",
    waistRange: "36-40 inches",
    hipRange: "51-56 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_238: {
    id: "SPEC-1238",
    name: "Tailoring Specification 238",
    bustRange: "48-53 inches",
    waistRange: "37-41 inches",
    hipRange: "52-57 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_239: {
    id: "SPEC-1239",
    name: "Tailoring Specification 239",
    bustRange: "49-54 inches",
    waistRange: "38-42 inches",
    hipRange: "53-58 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_240: {
    id: "SPEC-1240",
    name: "Tailoring Specification 240",
    bustRange: "30-35 inches",
    waistRange: "24-28 inches",
    hipRange: "34-39 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_241: {
    id: "SPEC-1241",
    name: "Tailoring Specification 241",
    bustRange: "31-36 inches",
    waistRange: "25-29 inches",
    hipRange: "35-40 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_242: {
    id: "SPEC-1242",
    name: "Tailoring Specification 242",
    bustRange: "32-37 inches",
    waistRange: "26-30 inches",
    hipRange: "36-41 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_243: {
    id: "SPEC-1243",
    name: "Tailoring Specification 243",
    bustRange: "33-38 inches",
    waistRange: "27-31 inches",
    hipRange: "37-42 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_244: {
    id: "SPEC-1244",
    name: "Tailoring Specification 244",
    bustRange: "34-39 inches",
    waistRange: "28-32 inches",
    hipRange: "38-43 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_245: {
    id: "SPEC-1245",
    name: "Tailoring Specification 245",
    bustRange: "35-40 inches",
    waistRange: "29-33 inches",
    hipRange: "39-44 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_246: {
    id: "SPEC-1246",
    name: "Tailoring Specification 246",
    bustRange: "36-41 inches",
    waistRange: "30-34 inches",
    hipRange: "40-45 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_247: {
    id: "SPEC-1247",
    name: "Tailoring Specification 247",
    bustRange: "37-42 inches",
    waistRange: "31-35 inches",
    hipRange: "41-46 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_248: {
    id: "SPEC-1248",
    name: "Tailoring Specification 248",
    bustRange: "38-43 inches",
    waistRange: "32-36 inches",
    hipRange: "42-47 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_249: {
    id: "SPEC-1249",
    name: "Tailoring Specification 249",
    bustRange: "39-44 inches",
    waistRange: "33-37 inches",
    hipRange: "43-48 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_250: {
    id: "SPEC-1250",
    name: "Tailoring Specification 250",
    bustRange: "40-45 inches",
    waistRange: "34-38 inches",
    hipRange: "44-49 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_251: {
    id: "SPEC-1251",
    name: "Tailoring Specification 251",
    bustRange: "41-46 inches",
    waistRange: "35-39 inches",
    hipRange: "45-50 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_252: {
    id: "SPEC-1252",
    name: "Tailoring Specification 252",
    bustRange: "42-47 inches",
    waistRange: "36-40 inches",
    hipRange: "46-51 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_253: {
    id: "SPEC-1253",
    name: "Tailoring Specification 253",
    bustRange: "43-48 inches",
    waistRange: "37-41 inches",
    hipRange: "47-52 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_254: {
    id: "SPEC-1254",
    name: "Tailoring Specification 254",
    bustRange: "44-49 inches",
    waistRange: "38-42 inches",
    hipRange: "48-53 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_255: {
    id: "SPEC-1255",
    name: "Tailoring Specification 255",
    bustRange: "45-50 inches",
    waistRange: "24-28 inches",
    hipRange: "49-54 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_256: {
    id: "SPEC-1256",
    name: "Tailoring Specification 256",
    bustRange: "46-51 inches",
    waistRange: "25-29 inches",
    hipRange: "50-55 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_257: {
    id: "SPEC-1257",
    name: "Tailoring Specification 257",
    bustRange: "47-52 inches",
    waistRange: "26-30 inches",
    hipRange: "51-56 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_258: {
    id: "SPEC-1258",
    name: "Tailoring Specification 258",
    bustRange: "48-53 inches",
    waistRange: "27-31 inches",
    hipRange: "52-57 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_259: {
    id: "SPEC-1259",
    name: "Tailoring Specification 259",
    bustRange: "49-54 inches",
    waistRange: "28-32 inches",
    hipRange: "53-58 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_260: {
    id: "SPEC-1260",
    name: "Tailoring Specification 260",
    bustRange: "30-35 inches",
    waistRange: "29-33 inches",
    hipRange: "34-39 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_261: {
    id: "SPEC-1261",
    name: "Tailoring Specification 261",
    bustRange: "31-36 inches",
    waistRange: "30-34 inches",
    hipRange: "35-40 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_262: {
    id: "SPEC-1262",
    name: "Tailoring Specification 262",
    bustRange: "32-37 inches",
    waistRange: "31-35 inches",
    hipRange: "36-41 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_263: {
    id: "SPEC-1263",
    name: "Tailoring Specification 263",
    bustRange: "33-38 inches",
    waistRange: "32-36 inches",
    hipRange: "37-42 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_264: {
    id: "SPEC-1264",
    name: "Tailoring Specification 264",
    bustRange: "34-39 inches",
    waistRange: "33-37 inches",
    hipRange: "38-43 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_265: {
    id: "SPEC-1265",
    name: "Tailoring Specification 265",
    bustRange: "35-40 inches",
    waistRange: "34-38 inches",
    hipRange: "39-44 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_266: {
    id: "SPEC-1266",
    name: "Tailoring Specification 266",
    bustRange: "36-41 inches",
    waistRange: "35-39 inches",
    hipRange: "40-45 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_267: {
    id: "SPEC-1267",
    name: "Tailoring Specification 267",
    bustRange: "37-42 inches",
    waistRange: "36-40 inches",
    hipRange: "41-46 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_268: {
    id: "SPEC-1268",
    name: "Tailoring Specification 268",
    bustRange: "38-43 inches",
    waistRange: "37-41 inches",
    hipRange: "42-47 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_269: {
    id: "SPEC-1269",
    name: "Tailoring Specification 269",
    bustRange: "39-44 inches",
    waistRange: "38-42 inches",
    hipRange: "43-48 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_270: {
    id: "SPEC-1270",
    name: "Tailoring Specification 270",
    bustRange: "40-45 inches",
    waistRange: "24-28 inches",
    hipRange: "44-49 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_271: {
    id: "SPEC-1271",
    name: "Tailoring Specification 271",
    bustRange: "41-46 inches",
    waistRange: "25-29 inches",
    hipRange: "45-50 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_272: {
    id: "SPEC-1272",
    name: "Tailoring Specification 272",
    bustRange: "42-47 inches",
    waistRange: "26-30 inches",
    hipRange: "46-51 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_273: {
    id: "SPEC-1273",
    name: "Tailoring Specification 273",
    bustRange: "43-48 inches",
    waistRange: "27-31 inches",
    hipRange: "47-52 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_274: {
    id: "SPEC-1274",
    name: "Tailoring Specification 274",
    bustRange: "44-49 inches",
    waistRange: "28-32 inches",
    hipRange: "48-53 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_275: {
    id: "SPEC-1275",
    name: "Tailoring Specification 275",
    bustRange: "45-50 inches",
    waistRange: "29-33 inches",
    hipRange: "49-54 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_276: {
    id: "SPEC-1276",
    name: "Tailoring Specification 276",
    bustRange: "46-51 inches",
    waistRange: "30-34 inches",
    hipRange: "50-55 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_277: {
    id: "SPEC-1277",
    name: "Tailoring Specification 277",
    bustRange: "47-52 inches",
    waistRange: "31-35 inches",
    hipRange: "51-56 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_278: {
    id: "SPEC-1278",
    name: "Tailoring Specification 278",
    bustRange: "48-53 inches",
    waistRange: "32-36 inches",
    hipRange: "52-57 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_279: {
    id: "SPEC-1279",
    name: "Tailoring Specification 279",
    bustRange: "49-54 inches",
    waistRange: "33-37 inches",
    hipRange: "53-58 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_280: {
    id: "SPEC-1280",
    name: "Tailoring Specification 280",
    bustRange: "30-35 inches",
    waistRange: "34-38 inches",
    hipRange: "34-39 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_281: {
    id: "SPEC-1281",
    name: "Tailoring Specification 281",
    bustRange: "31-36 inches",
    waistRange: "35-39 inches",
    hipRange: "35-40 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_282: {
    id: "SPEC-1282",
    name: "Tailoring Specification 282",
    bustRange: "32-37 inches",
    waistRange: "36-40 inches",
    hipRange: "36-41 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_283: {
    id: "SPEC-1283",
    name: "Tailoring Specification 283",
    bustRange: "33-38 inches",
    waistRange: "37-41 inches",
    hipRange: "37-42 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_284: {
    id: "SPEC-1284",
    name: "Tailoring Specification 284",
    bustRange: "34-39 inches",
    waistRange: "38-42 inches",
    hipRange: "38-43 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_285: {
    id: "SPEC-1285",
    name: "Tailoring Specification 285",
    bustRange: "35-40 inches",
    waistRange: "24-28 inches",
    hipRange: "39-44 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_286: {
    id: "SPEC-1286",
    name: "Tailoring Specification 286",
    bustRange: "36-41 inches",
    waistRange: "25-29 inches",
    hipRange: "40-45 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_287: {
    id: "SPEC-1287",
    name: "Tailoring Specification 287",
    bustRange: "37-42 inches",
    waistRange: "26-30 inches",
    hipRange: "41-46 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_288: {
    id: "SPEC-1288",
    name: "Tailoring Specification 288",
    bustRange: "38-43 inches",
    waistRange: "27-31 inches",
    hipRange: "42-47 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_289: {
    id: "SPEC-1289",
    name: "Tailoring Specification 289",
    bustRange: "39-44 inches",
    waistRange: "28-32 inches",
    hipRange: "43-48 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_290: {
    id: "SPEC-1290",
    name: "Tailoring Specification 290",
    bustRange: "40-45 inches",
    waistRange: "29-33 inches",
    hipRange: "44-49 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_291: {
    id: "SPEC-1291",
    name: "Tailoring Specification 291",
    bustRange: "41-46 inches",
    waistRange: "30-34 inches",
    hipRange: "45-50 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_292: {
    id: "SPEC-1292",
    name: "Tailoring Specification 292",
    bustRange: "42-47 inches",
    waistRange: "31-35 inches",
    hipRange: "46-51 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_293: {
    id: "SPEC-1293",
    name: "Tailoring Specification 293",
    bustRange: "43-48 inches",
    waistRange: "32-36 inches",
    hipRange: "47-52 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_294: {
    id: "SPEC-1294",
    name: "Tailoring Specification 294",
    bustRange: "44-49 inches",
    waistRange: "33-37 inches",
    hipRange: "48-53 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_295: {
    id: "SPEC-1295",
    name: "Tailoring Specification 295",
    bustRange: "45-50 inches",
    waistRange: "34-38 inches",
    hipRange: "49-54 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_296: {
    id: "SPEC-1296",
    name: "Tailoring Specification 296",
    bustRange: "46-51 inches",
    waistRange: "35-39 inches",
    hipRange: "50-55 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_297: {
    id: "SPEC-1297",
    name: "Tailoring Specification 297",
    bustRange: "47-52 inches",
    waistRange: "36-40 inches",
    hipRange: "51-56 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_298: {
    id: "SPEC-1298",
    name: "Tailoring Specification 298",
    bustRange: "48-53 inches",
    waistRange: "37-41 inches",
    hipRange: "52-57 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_299: {
    id: "SPEC-1299",
    name: "Tailoring Specification 299",
    bustRange: "49-54 inches",
    waistRange: "38-42 inches",
    hipRange: "53-58 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_300: {
    id: "SPEC-1300",
    name: "Tailoring Specification 300",
    bustRange: "30-35 inches",
    waistRange: "24-28 inches",
    hipRange: "34-39 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_301: {
    id: "SPEC-1301",
    name: "Tailoring Specification 301",
    bustRange: "31-36 inches",
    waistRange: "25-29 inches",
    hipRange: "35-40 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_302: {
    id: "SPEC-1302",
    name: "Tailoring Specification 302",
    bustRange: "32-37 inches",
    waistRange: "26-30 inches",
    hipRange: "36-41 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_303: {
    id: "SPEC-1303",
    name: "Tailoring Specification 303",
    bustRange: "33-38 inches",
    waistRange: "27-31 inches",
    hipRange: "37-42 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_304: {
    id: "SPEC-1304",
    name: "Tailoring Specification 304",
    bustRange: "34-39 inches",
    waistRange: "28-32 inches",
    hipRange: "38-43 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_305: {
    id: "SPEC-1305",
    name: "Tailoring Specification 305",
    bustRange: "35-40 inches",
    waistRange: "29-33 inches",
    hipRange: "39-44 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_306: {
    id: "SPEC-1306",
    name: "Tailoring Specification 306",
    bustRange: "36-41 inches",
    waistRange: "30-34 inches",
    hipRange: "40-45 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_307: {
    id: "SPEC-1307",
    name: "Tailoring Specification 307",
    bustRange: "37-42 inches",
    waistRange: "31-35 inches",
    hipRange: "41-46 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_308: {
    id: "SPEC-1308",
    name: "Tailoring Specification 308",
    bustRange: "38-43 inches",
    waistRange: "32-36 inches",
    hipRange: "42-47 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_309: {
    id: "SPEC-1309",
    name: "Tailoring Specification 309",
    bustRange: "39-44 inches",
    waistRange: "33-37 inches",
    hipRange: "43-48 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_310: {
    id: "SPEC-1310",
    name: "Tailoring Specification 310",
    bustRange: "40-45 inches",
    waistRange: "34-38 inches",
    hipRange: "44-49 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_311: {
    id: "SPEC-1311",
    name: "Tailoring Specification 311",
    bustRange: "41-46 inches",
    waistRange: "35-39 inches",
    hipRange: "45-50 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_312: {
    id: "SPEC-1312",
    name: "Tailoring Specification 312",
    bustRange: "42-47 inches",
    waistRange: "36-40 inches",
    hipRange: "46-51 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_313: {
    id: "SPEC-1313",
    name: "Tailoring Specification 313",
    bustRange: "43-48 inches",
    waistRange: "37-41 inches",
    hipRange: "47-52 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_314: {
    id: "SPEC-1314",
    name: "Tailoring Specification 314",
    bustRange: "44-49 inches",
    waistRange: "38-42 inches",
    hipRange: "48-53 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_315: {
    id: "SPEC-1315",
    name: "Tailoring Specification 315",
    bustRange: "45-50 inches",
    waistRange: "24-28 inches",
    hipRange: "49-54 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_316: {
    id: "SPEC-1316",
    name: "Tailoring Specification 316",
    bustRange: "46-51 inches",
    waistRange: "25-29 inches",
    hipRange: "50-55 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_317: {
    id: "SPEC-1317",
    name: "Tailoring Specification 317",
    bustRange: "47-52 inches",
    waistRange: "26-30 inches",
    hipRange: "51-56 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_318: {
    id: "SPEC-1318",
    name: "Tailoring Specification 318",
    bustRange: "48-53 inches",
    waistRange: "27-31 inches",
    hipRange: "52-57 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_319: {
    id: "SPEC-1319",
    name: "Tailoring Specification 319",
    bustRange: "49-54 inches",
    waistRange: "28-32 inches",
    hipRange: "53-58 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_320: {
    id: "SPEC-1320",
    name: "Tailoring Specification 320",
    bustRange: "30-35 inches",
    waistRange: "29-33 inches",
    hipRange: "34-39 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_321: {
    id: "SPEC-1321",
    name: "Tailoring Specification 321",
    bustRange: "31-36 inches",
    waistRange: "30-34 inches",
    hipRange: "35-40 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_322: {
    id: "SPEC-1322",
    name: "Tailoring Specification 322",
    bustRange: "32-37 inches",
    waistRange: "31-35 inches",
    hipRange: "36-41 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_323: {
    id: "SPEC-1323",
    name: "Tailoring Specification 323",
    bustRange: "33-38 inches",
    waistRange: "32-36 inches",
    hipRange: "37-42 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_324: {
    id: "SPEC-1324",
    name: "Tailoring Specification 324",
    bustRange: "34-39 inches",
    waistRange: "33-37 inches",
    hipRange: "38-43 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_325: {
    id: "SPEC-1325",
    name: "Tailoring Specification 325",
    bustRange: "35-40 inches",
    waistRange: "34-38 inches",
    hipRange: "39-44 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_326: {
    id: "SPEC-1326",
    name: "Tailoring Specification 326",
    bustRange: "36-41 inches",
    waistRange: "35-39 inches",
    hipRange: "40-45 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_327: {
    id: "SPEC-1327",
    name: "Tailoring Specification 327",
    bustRange: "37-42 inches",
    waistRange: "36-40 inches",
    hipRange: "41-46 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_328: {
    id: "SPEC-1328",
    name: "Tailoring Specification 328",
    bustRange: "38-43 inches",
    waistRange: "37-41 inches",
    hipRange: "42-47 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_329: {
    id: "SPEC-1329",
    name: "Tailoring Specification 329",
    bustRange: "39-44 inches",
    waistRange: "38-42 inches",
    hipRange: "43-48 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_330: {
    id: "SPEC-1330",
    name: "Tailoring Specification 330",
    bustRange: "40-45 inches",
    waistRange: "24-28 inches",
    hipRange: "44-49 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_331: {
    id: "SPEC-1331",
    name: "Tailoring Specification 331",
    bustRange: "41-46 inches",
    waistRange: "25-29 inches",
    hipRange: "45-50 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_332: {
    id: "SPEC-1332",
    name: "Tailoring Specification 332",
    bustRange: "42-47 inches",
    waistRange: "26-30 inches",
    hipRange: "46-51 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_333: {
    id: "SPEC-1333",
    name: "Tailoring Specification 333",
    bustRange: "43-48 inches",
    waistRange: "27-31 inches",
    hipRange: "47-52 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_334: {
    id: "SPEC-1334",
    name: "Tailoring Specification 334",
    bustRange: "44-49 inches",
    waistRange: "28-32 inches",
    hipRange: "48-53 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_335: {
    id: "SPEC-1335",
    name: "Tailoring Specification 335",
    bustRange: "45-50 inches",
    waistRange: "29-33 inches",
    hipRange: "49-54 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_336: {
    id: "SPEC-1336",
    name: "Tailoring Specification 336",
    bustRange: "46-51 inches",
    waistRange: "30-34 inches",
    hipRange: "50-55 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_337: {
    id: "SPEC-1337",
    name: "Tailoring Specification 337",
    bustRange: "47-52 inches",
    waistRange: "31-35 inches",
    hipRange: "51-56 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_338: {
    id: "SPEC-1338",
    name: "Tailoring Specification 338",
    bustRange: "48-53 inches",
    waistRange: "32-36 inches",
    hipRange: "52-57 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_339: {
    id: "SPEC-1339",
    name: "Tailoring Specification 339",
    bustRange: "49-54 inches",
    waistRange: "33-37 inches",
    hipRange: "53-58 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_340: {
    id: "SPEC-1340",
    name: "Tailoring Specification 340",
    bustRange: "30-35 inches",
    waistRange: "34-38 inches",
    hipRange: "34-39 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_341: {
    id: "SPEC-1341",
    name: "Tailoring Specification 341",
    bustRange: "31-36 inches",
    waistRange: "35-39 inches",
    hipRange: "35-40 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_342: {
    id: "SPEC-1342",
    name: "Tailoring Specification 342",
    bustRange: "32-37 inches",
    waistRange: "36-40 inches",
    hipRange: "36-41 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_343: {
    id: "SPEC-1343",
    name: "Tailoring Specification 343",
    bustRange: "33-38 inches",
    waistRange: "37-41 inches",
    hipRange: "37-42 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_344: {
    id: "SPEC-1344",
    name: "Tailoring Specification 344",
    bustRange: "34-39 inches",
    waistRange: "38-42 inches",
    hipRange: "38-43 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_345: {
    id: "SPEC-1345",
    name: "Tailoring Specification 345",
    bustRange: "35-40 inches",
    waistRange: "24-28 inches",
    hipRange: "39-44 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_346: {
    id: "SPEC-1346",
    name: "Tailoring Specification 346",
    bustRange: "36-41 inches",
    waistRange: "25-29 inches",
    hipRange: "40-45 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_347: {
    id: "SPEC-1347",
    name: "Tailoring Specification 347",
    bustRange: "37-42 inches",
    waistRange: "26-30 inches",
    hipRange: "41-46 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_348: {
    id: "SPEC-1348",
    name: "Tailoring Specification 348",
    bustRange: "38-43 inches",
    waistRange: "27-31 inches",
    hipRange: "42-47 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_349: {
    id: "SPEC-1349",
    name: "Tailoring Specification 349",
    bustRange: "39-44 inches",
    waistRange: "28-32 inches",
    hipRange: "43-48 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_350: {
    id: "SPEC-1350",
    name: "Tailoring Specification 350",
    bustRange: "40-45 inches",
    waistRange: "29-33 inches",
    hipRange: "44-49 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_351: {
    id: "SPEC-1351",
    name: "Tailoring Specification 351",
    bustRange: "41-46 inches",
    waistRange: "30-34 inches",
    hipRange: "45-50 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_352: {
    id: "SPEC-1352",
    name: "Tailoring Specification 352",
    bustRange: "42-47 inches",
    waistRange: "31-35 inches",
    hipRange: "46-51 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_353: {
    id: "SPEC-1353",
    name: "Tailoring Specification 353",
    bustRange: "43-48 inches",
    waistRange: "32-36 inches",
    hipRange: "47-52 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_354: {
    id: "SPEC-1354",
    name: "Tailoring Specification 354",
    bustRange: "44-49 inches",
    waistRange: "33-37 inches",
    hipRange: "48-53 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_355: {
    id: "SPEC-1355",
    name: "Tailoring Specification 355",
    bustRange: "45-50 inches",
    waistRange: "34-38 inches",
    hipRange: "49-54 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_356: {
    id: "SPEC-1356",
    name: "Tailoring Specification 356",
    bustRange: "46-51 inches",
    waistRange: "35-39 inches",
    hipRange: "50-55 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_357: {
    id: "SPEC-1357",
    name: "Tailoring Specification 357",
    bustRange: "47-52 inches",
    waistRange: "36-40 inches",
    hipRange: "51-56 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_358: {
    id: "SPEC-1358",
    name: "Tailoring Specification 358",
    bustRange: "48-53 inches",
    waistRange: "37-41 inches",
    hipRange: "52-57 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_359: {
    id: "SPEC-1359",
    name: "Tailoring Specification 359",
    bustRange: "49-54 inches",
    waistRange: "38-42 inches",
    hipRange: "53-58 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_360: {
    id: "SPEC-1360",
    name: "Tailoring Specification 360",
    bustRange: "30-35 inches",
    waistRange: "24-28 inches",
    hipRange: "34-39 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_361: {
    id: "SPEC-1361",
    name: "Tailoring Specification 361",
    bustRange: "31-36 inches",
    waistRange: "25-29 inches",
    hipRange: "35-40 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_362: {
    id: "SPEC-1362",
    name: "Tailoring Specification 362",
    bustRange: "32-37 inches",
    waistRange: "26-30 inches",
    hipRange: "36-41 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_363: {
    id: "SPEC-1363",
    name: "Tailoring Specification 363",
    bustRange: "33-38 inches",
    waistRange: "27-31 inches",
    hipRange: "37-42 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_364: {
    id: "SPEC-1364",
    name: "Tailoring Specification 364",
    bustRange: "34-39 inches",
    waistRange: "28-32 inches",
    hipRange: "38-43 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_365: {
    id: "SPEC-1365",
    name: "Tailoring Specification 365",
    bustRange: "35-40 inches",
    waistRange: "29-33 inches",
    hipRange: "39-44 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_366: {
    id: "SPEC-1366",
    name: "Tailoring Specification 366",
    bustRange: "36-41 inches",
    waistRange: "30-34 inches",
    hipRange: "40-45 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_367: {
    id: "SPEC-1367",
    name: "Tailoring Specification 367",
    bustRange: "37-42 inches",
    waistRange: "31-35 inches",
    hipRange: "41-46 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_368: {
    id: "SPEC-1368",
    name: "Tailoring Specification 368",
    bustRange: "38-43 inches",
    waistRange: "32-36 inches",
    hipRange: "42-47 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_369: {
    id: "SPEC-1369",
    name: "Tailoring Specification 369",
    bustRange: "39-44 inches",
    waistRange: "33-37 inches",
    hipRange: "43-48 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_370: {
    id: "SPEC-1370",
    name: "Tailoring Specification 370",
    bustRange: "40-45 inches",
    waistRange: "34-38 inches",
    hipRange: "44-49 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_371: {
    id: "SPEC-1371",
    name: "Tailoring Specification 371",
    bustRange: "41-46 inches",
    waistRange: "35-39 inches",
    hipRange: "45-50 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_372: {
    id: "SPEC-1372",
    name: "Tailoring Specification 372",
    bustRange: "42-47 inches",
    waistRange: "36-40 inches",
    hipRange: "46-51 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_373: {
    id: "SPEC-1373",
    name: "Tailoring Specification 373",
    bustRange: "43-48 inches",
    waistRange: "37-41 inches",
    hipRange: "47-52 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_374: {
    id: "SPEC-1374",
    name: "Tailoring Specification 374",
    bustRange: "44-49 inches",
    waistRange: "38-42 inches",
    hipRange: "48-53 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_375: {
    id: "SPEC-1375",
    name: "Tailoring Specification 375",
    bustRange: "45-50 inches",
    waistRange: "24-28 inches",
    hipRange: "49-54 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_376: {
    id: "SPEC-1376",
    name: "Tailoring Specification 376",
    bustRange: "46-51 inches",
    waistRange: "25-29 inches",
    hipRange: "50-55 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_377: {
    id: "SPEC-1377",
    name: "Tailoring Specification 377",
    bustRange: "47-52 inches",
    waistRange: "26-30 inches",
    hipRange: "51-56 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_378: {
    id: "SPEC-1378",
    name: "Tailoring Specification 378",
    bustRange: "48-53 inches",
    waistRange: "27-31 inches",
    hipRange: "52-57 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_379: {
    id: "SPEC-1379",
    name: "Tailoring Specification 379",
    bustRange: "49-54 inches",
    waistRange: "28-32 inches",
    hipRange: "53-58 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_380: {
    id: "SPEC-1380",
    name: "Tailoring Specification 380",
    bustRange: "30-35 inches",
    waistRange: "29-33 inches",
    hipRange: "34-39 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_381: {
    id: "SPEC-1381",
    name: "Tailoring Specification 381",
    bustRange: "31-36 inches",
    waistRange: "30-34 inches",
    hipRange: "35-40 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_382: {
    id: "SPEC-1382",
    name: "Tailoring Specification 382",
    bustRange: "32-37 inches",
    waistRange: "31-35 inches",
    hipRange: "36-41 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_383: {
    id: "SPEC-1383",
    name: "Tailoring Specification 383",
    bustRange: "33-38 inches",
    waistRange: "32-36 inches",
    hipRange: "37-42 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_384: {
    id: "SPEC-1384",
    name: "Tailoring Specification 384",
    bustRange: "34-39 inches",
    waistRange: "33-37 inches",
    hipRange: "38-43 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_385: {
    id: "SPEC-1385",
    name: "Tailoring Specification 385",
    bustRange: "35-40 inches",
    waistRange: "34-38 inches",
    hipRange: "39-44 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_386: {
    id: "SPEC-1386",
    name: "Tailoring Specification 386",
    bustRange: "36-41 inches",
    waistRange: "35-39 inches",
    hipRange: "40-45 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_387: {
    id: "SPEC-1387",
    name: "Tailoring Specification 387",
    bustRange: "37-42 inches",
    waistRange: "36-40 inches",
    hipRange: "41-46 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_388: {
    id: "SPEC-1388",
    name: "Tailoring Specification 388",
    bustRange: "38-43 inches",
    waistRange: "37-41 inches",
    hipRange: "42-47 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_389: {
    id: "SPEC-1389",
    name: "Tailoring Specification 389",
    bustRange: "39-44 inches",
    waistRange: "38-42 inches",
    hipRange: "43-48 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_390: {
    id: "SPEC-1390",
    name: "Tailoring Specification 390",
    bustRange: "40-45 inches",
    waistRange: "24-28 inches",
    hipRange: "44-49 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_391: {
    id: "SPEC-1391",
    name: "Tailoring Specification 391",
    bustRange: "41-46 inches",
    waistRange: "25-29 inches",
    hipRange: "45-50 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_392: {
    id: "SPEC-1392",
    name: "Tailoring Specification 392",
    bustRange: "42-47 inches",
    waistRange: "26-30 inches",
    hipRange: "46-51 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_393: {
    id: "SPEC-1393",
    name: "Tailoring Specification 393",
    bustRange: "43-48 inches",
    waistRange: "27-31 inches",
    hipRange: "47-52 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_394: {
    id: "SPEC-1394",
    name: "Tailoring Specification 394",
    bustRange: "44-49 inches",
    waistRange: "28-32 inches",
    hipRange: "48-53 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_395: {
    id: "SPEC-1395",
    name: "Tailoring Specification 395",
    bustRange: "45-50 inches",
    waistRange: "29-33 inches",
    hipRange: "49-54 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_396: {
    id: "SPEC-1396",
    name: "Tailoring Specification 396",
    bustRange: "46-51 inches",
    waistRange: "30-34 inches",
    hipRange: "50-55 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_397: {
    id: "SPEC-1397",
    name: "Tailoring Specification 397",
    bustRange: "47-52 inches",
    waistRange: "31-35 inches",
    hipRange: "51-56 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_398: {
    id: "SPEC-1398",
    name: "Tailoring Specification 398",
    bustRange: "48-53 inches",
    waistRange: "32-36 inches",
    hipRange: "52-57 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_399: {
    id: "SPEC-1399",
    name: "Tailoring Specification 399",
    bustRange: "49-54 inches",
    waistRange: "33-37 inches",
    hipRange: "53-58 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_400: {
    id: "SPEC-1400",
    name: "Tailoring Specification 400",
    bustRange: "30-35 inches",
    waistRange: "34-38 inches",
    hipRange: "34-39 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_401: {
    id: "SPEC-1401",
    name: "Tailoring Specification 401",
    bustRange: "31-36 inches",
    waistRange: "35-39 inches",
    hipRange: "35-40 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_402: {
    id: "SPEC-1402",
    name: "Tailoring Specification 402",
    bustRange: "32-37 inches",
    waistRange: "36-40 inches",
    hipRange: "36-41 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_403: {
    id: "SPEC-1403",
    name: "Tailoring Specification 403",
    bustRange: "33-38 inches",
    waistRange: "37-41 inches",
    hipRange: "37-42 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_404: {
    id: "SPEC-1404",
    name: "Tailoring Specification 404",
    bustRange: "34-39 inches",
    waistRange: "38-42 inches",
    hipRange: "38-43 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_405: {
    id: "SPEC-1405",
    name: "Tailoring Specification 405",
    bustRange: "35-40 inches",
    waistRange: "24-28 inches",
    hipRange: "39-44 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_406: {
    id: "SPEC-1406",
    name: "Tailoring Specification 406",
    bustRange: "36-41 inches",
    waistRange: "25-29 inches",
    hipRange: "40-45 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_407: {
    id: "SPEC-1407",
    name: "Tailoring Specification 407",
    bustRange: "37-42 inches",
    waistRange: "26-30 inches",
    hipRange: "41-46 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_408: {
    id: "SPEC-1408",
    name: "Tailoring Specification 408",
    bustRange: "38-43 inches",
    waistRange: "27-31 inches",
    hipRange: "42-47 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_409: {
    id: "SPEC-1409",
    name: "Tailoring Specification 409",
    bustRange: "39-44 inches",
    waistRange: "28-32 inches",
    hipRange: "43-48 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_410: {
    id: "SPEC-1410",
    name: "Tailoring Specification 410",
    bustRange: "40-45 inches",
    waistRange: "29-33 inches",
    hipRange: "44-49 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_411: {
    id: "SPEC-1411",
    name: "Tailoring Specification 411",
    bustRange: "41-46 inches",
    waistRange: "30-34 inches",
    hipRange: "45-50 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_412: {
    id: "SPEC-1412",
    name: "Tailoring Specification 412",
    bustRange: "42-47 inches",
    waistRange: "31-35 inches",
    hipRange: "46-51 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_413: {
    id: "SPEC-1413",
    name: "Tailoring Specification 413",
    bustRange: "43-48 inches",
    waistRange: "32-36 inches",
    hipRange: "47-52 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_414: {
    id: "SPEC-1414",
    name: "Tailoring Specification 414",
    bustRange: "44-49 inches",
    waistRange: "33-37 inches",
    hipRange: "48-53 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_415: {
    id: "SPEC-1415",
    name: "Tailoring Specification 415",
    bustRange: "45-50 inches",
    waistRange: "34-38 inches",
    hipRange: "49-54 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_416: {
    id: "SPEC-1416",
    name: "Tailoring Specification 416",
    bustRange: "46-51 inches",
    waistRange: "35-39 inches",
    hipRange: "50-55 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_417: {
    id: "SPEC-1417",
    name: "Tailoring Specification 417",
    bustRange: "47-52 inches",
    waistRange: "36-40 inches",
    hipRange: "51-56 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_418: {
    id: "SPEC-1418",
    name: "Tailoring Specification 418",
    bustRange: "48-53 inches",
    waistRange: "37-41 inches",
    hipRange: "52-57 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_419: {
    id: "SPEC-1419",
    name: "Tailoring Specification 419",
    bustRange: "49-54 inches",
    waistRange: "38-42 inches",
    hipRange: "53-58 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_420: {
    id: "SPEC-1420",
    name: "Tailoring Specification 420",
    bustRange: "30-35 inches",
    waistRange: "24-28 inches",
    hipRange: "34-39 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_421: {
    id: "SPEC-1421",
    name: "Tailoring Specification 421",
    bustRange: "31-36 inches",
    waistRange: "25-29 inches",
    hipRange: "35-40 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_422: {
    id: "SPEC-1422",
    name: "Tailoring Specification 422",
    bustRange: "32-37 inches",
    waistRange: "26-30 inches",
    hipRange: "36-41 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_423: {
    id: "SPEC-1423",
    name: "Tailoring Specification 423",
    bustRange: "33-38 inches",
    waistRange: "27-31 inches",
    hipRange: "37-42 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_424: {
    id: "SPEC-1424",
    name: "Tailoring Specification 424",
    bustRange: "34-39 inches",
    waistRange: "28-32 inches",
    hipRange: "38-43 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_425: {
    id: "SPEC-1425",
    name: "Tailoring Specification 425",
    bustRange: "35-40 inches",
    waistRange: "29-33 inches",
    hipRange: "39-44 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_426: {
    id: "SPEC-1426",
    name: "Tailoring Specification 426",
    bustRange: "36-41 inches",
    waistRange: "30-34 inches",
    hipRange: "40-45 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_427: {
    id: "SPEC-1427",
    name: "Tailoring Specification 427",
    bustRange: "37-42 inches",
    waistRange: "31-35 inches",
    hipRange: "41-46 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_428: {
    id: "SPEC-1428",
    name: "Tailoring Specification 428",
    bustRange: "38-43 inches",
    waistRange: "32-36 inches",
    hipRange: "42-47 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_429: {
    id: "SPEC-1429",
    name: "Tailoring Specification 429",
    bustRange: "39-44 inches",
    waistRange: "33-37 inches",
    hipRange: "43-48 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_430: {
    id: "SPEC-1430",
    name: "Tailoring Specification 430",
    bustRange: "40-45 inches",
    waistRange: "34-38 inches",
    hipRange: "44-49 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_431: {
    id: "SPEC-1431",
    name: "Tailoring Specification 431",
    bustRange: "41-46 inches",
    waistRange: "35-39 inches",
    hipRange: "45-50 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_432: {
    id: "SPEC-1432",
    name: "Tailoring Specification 432",
    bustRange: "42-47 inches",
    waistRange: "36-40 inches",
    hipRange: "46-51 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_433: {
    id: "SPEC-1433",
    name: "Tailoring Specification 433",
    bustRange: "43-48 inches",
    waistRange: "37-41 inches",
    hipRange: "47-52 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_434: {
    id: "SPEC-1434",
    name: "Tailoring Specification 434",
    bustRange: "44-49 inches",
    waistRange: "38-42 inches",
    hipRange: "48-53 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_435: {
    id: "SPEC-1435",
    name: "Tailoring Specification 435",
    bustRange: "45-50 inches",
    waistRange: "24-28 inches",
    hipRange: "49-54 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_436: {
    id: "SPEC-1436",
    name: "Tailoring Specification 436",
    bustRange: "46-51 inches",
    waistRange: "25-29 inches",
    hipRange: "50-55 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_437: {
    id: "SPEC-1437",
    name: "Tailoring Specification 437",
    bustRange: "47-52 inches",
    waistRange: "26-30 inches",
    hipRange: "51-56 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_438: {
    id: "SPEC-1438",
    name: "Tailoring Specification 438",
    bustRange: "48-53 inches",
    waistRange: "27-31 inches",
    hipRange: "52-57 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_439: {
    id: "SPEC-1439",
    name: "Tailoring Specification 439",
    bustRange: "49-54 inches",
    waistRange: "28-32 inches",
    hipRange: "53-58 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_440: {
    id: "SPEC-1440",
    name: "Tailoring Specification 440",
    bustRange: "30-35 inches",
    waistRange: "29-33 inches",
    hipRange: "34-39 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_441: {
    id: "SPEC-1441",
    name: "Tailoring Specification 441",
    bustRange: "31-36 inches",
    waistRange: "30-34 inches",
    hipRange: "35-40 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_442: {
    id: "SPEC-1442",
    name: "Tailoring Specification 442",
    bustRange: "32-37 inches",
    waistRange: "31-35 inches",
    hipRange: "36-41 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_443: {
    id: "SPEC-1443",
    name: "Tailoring Specification 443",
    bustRange: "33-38 inches",
    waistRange: "32-36 inches",
    hipRange: "37-42 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_444: {
    id: "SPEC-1444",
    name: "Tailoring Specification 444",
    bustRange: "34-39 inches",
    waistRange: "33-37 inches",
    hipRange: "38-43 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_445: {
    id: "SPEC-1445",
    name: "Tailoring Specification 445",
    bustRange: "35-40 inches",
    waistRange: "34-38 inches",
    hipRange: "39-44 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_446: {
    id: "SPEC-1446",
    name: "Tailoring Specification 446",
    bustRange: "36-41 inches",
    waistRange: "35-39 inches",
    hipRange: "40-45 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_447: {
    id: "SPEC-1447",
    name: "Tailoring Specification 447",
    bustRange: "37-42 inches",
    waistRange: "36-40 inches",
    hipRange: "41-46 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_448: {
    id: "SPEC-1448",
    name: "Tailoring Specification 448",
    bustRange: "38-43 inches",
    waistRange: "37-41 inches",
    hipRange: "42-47 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_449: {
    id: "SPEC-1449",
    name: "Tailoring Specification 449",
    bustRange: "39-44 inches",
    waistRange: "38-42 inches",
    hipRange: "43-48 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_450: {
    id: "SPEC-1450",
    name: "Tailoring Specification 450",
    bustRange: "40-45 inches",
    waistRange: "24-28 inches",
    hipRange: "44-49 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_451: {
    id: "SPEC-1451",
    name: "Tailoring Specification 451",
    bustRange: "41-46 inches",
    waistRange: "25-29 inches",
    hipRange: "45-50 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_452: {
    id: "SPEC-1452",
    name: "Tailoring Specification 452",
    bustRange: "42-47 inches",
    waistRange: "26-30 inches",
    hipRange: "46-51 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_453: {
    id: "SPEC-1453",
    name: "Tailoring Specification 453",
    bustRange: "43-48 inches",
    waistRange: "27-31 inches",
    hipRange: "47-52 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_454: {
    id: "SPEC-1454",
    name: "Tailoring Specification 454",
    bustRange: "44-49 inches",
    waistRange: "28-32 inches",
    hipRange: "48-53 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_455: {
    id: "SPEC-1455",
    name: "Tailoring Specification 455",
    bustRange: "45-50 inches",
    waistRange: "29-33 inches",
    hipRange: "49-54 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_456: {
    id: "SPEC-1456",
    name: "Tailoring Specification 456",
    bustRange: "46-51 inches",
    waistRange: "30-34 inches",
    hipRange: "50-55 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_457: {
    id: "SPEC-1457",
    name: "Tailoring Specification 457",
    bustRange: "47-52 inches",
    waistRange: "31-35 inches",
    hipRange: "51-56 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_458: {
    id: "SPEC-1458",
    name: "Tailoring Specification 458",
    bustRange: "48-53 inches",
    waistRange: "32-36 inches",
    hipRange: "52-57 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_459: {
    id: "SPEC-1459",
    name: "Tailoring Specification 459",
    bustRange: "49-54 inches",
    waistRange: "33-37 inches",
    hipRange: "53-58 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_460: {
    id: "SPEC-1460",
    name: "Tailoring Specification 460",
    bustRange: "30-35 inches",
    waistRange: "34-38 inches",
    hipRange: "34-39 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_461: {
    id: "SPEC-1461",
    name: "Tailoring Specification 461",
    bustRange: "31-36 inches",
    waistRange: "35-39 inches",
    hipRange: "35-40 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_462: {
    id: "SPEC-1462",
    name: "Tailoring Specification 462",
    bustRange: "32-37 inches",
    waistRange: "36-40 inches",
    hipRange: "36-41 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_463: {
    id: "SPEC-1463",
    name: "Tailoring Specification 463",
    bustRange: "33-38 inches",
    waistRange: "37-41 inches",
    hipRange: "37-42 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_464: {
    id: "SPEC-1464",
    name: "Tailoring Specification 464",
    bustRange: "34-39 inches",
    waistRange: "38-42 inches",
    hipRange: "38-43 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_465: {
    id: "SPEC-1465",
    name: "Tailoring Specification 465",
    bustRange: "35-40 inches",
    waistRange: "24-28 inches",
    hipRange: "39-44 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_466: {
    id: "SPEC-1466",
    name: "Tailoring Specification 466",
    bustRange: "36-41 inches",
    waistRange: "25-29 inches",
    hipRange: "40-45 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_467: {
    id: "SPEC-1467",
    name: "Tailoring Specification 467",
    bustRange: "37-42 inches",
    waistRange: "26-30 inches",
    hipRange: "41-46 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_468: {
    id: "SPEC-1468",
    name: "Tailoring Specification 468",
    bustRange: "38-43 inches",
    waistRange: "27-31 inches",
    hipRange: "42-47 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_469: {
    id: "SPEC-1469",
    name: "Tailoring Specification 469",
    bustRange: "39-44 inches",
    waistRange: "28-32 inches",
    hipRange: "43-48 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_470: {
    id: "SPEC-1470",
    name: "Tailoring Specification 470",
    bustRange: "40-45 inches",
    waistRange: "29-33 inches",
    hipRange: "44-49 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_471: {
    id: "SPEC-1471",
    name: "Tailoring Specification 471",
    bustRange: "41-46 inches",
    waistRange: "30-34 inches",
    hipRange: "45-50 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_472: {
    id: "SPEC-1472",
    name: "Tailoring Specification 472",
    bustRange: "42-47 inches",
    waistRange: "31-35 inches",
    hipRange: "46-51 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_473: {
    id: "SPEC-1473",
    name: "Tailoring Specification 473",
    bustRange: "43-48 inches",
    waistRange: "32-36 inches",
    hipRange: "47-52 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_474: {
    id: "SPEC-1474",
    name: "Tailoring Specification 474",
    bustRange: "44-49 inches",
    waistRange: "33-37 inches",
    hipRange: "48-53 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_475: {
    id: "SPEC-1475",
    name: "Tailoring Specification 475",
    bustRange: "45-50 inches",
    waistRange: "34-38 inches",
    hipRange: "49-54 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_476: {
    id: "SPEC-1476",
    name: "Tailoring Specification 476",
    bustRange: "46-51 inches",
    waistRange: "35-39 inches",
    hipRange: "50-55 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_477: {
    id: "SPEC-1477",
    name: "Tailoring Specification 477",
    bustRange: "47-52 inches",
    waistRange: "36-40 inches",
    hipRange: "51-56 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_478: {
    id: "SPEC-1478",
    name: "Tailoring Specification 478",
    bustRange: "48-53 inches",
    waistRange: "37-41 inches",
    hipRange: "52-57 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_479: {
    id: "SPEC-1479",
    name: "Tailoring Specification 479",
    bustRange: "49-54 inches",
    waistRange: "38-42 inches",
    hipRange: "53-58 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_480: {
    id: "SPEC-1480",
    name: "Tailoring Specification 480",
    bustRange: "30-35 inches",
    waistRange: "24-28 inches",
    hipRange: "34-39 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_481: {
    id: "SPEC-1481",
    name: "Tailoring Specification 481",
    bustRange: "31-36 inches",
    waistRange: "25-29 inches",
    hipRange: "35-40 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_482: {
    id: "SPEC-1482",
    name: "Tailoring Specification 482",
    bustRange: "32-37 inches",
    waistRange: "26-30 inches",
    hipRange: "36-41 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_483: {
    id: "SPEC-1483",
    name: "Tailoring Specification 483",
    bustRange: "33-38 inches",
    waistRange: "27-31 inches",
    hipRange: "37-42 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_484: {
    id: "SPEC-1484",
    name: "Tailoring Specification 484",
    bustRange: "34-39 inches",
    waistRange: "28-32 inches",
    hipRange: "38-43 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_485: {
    id: "SPEC-1485",
    name: "Tailoring Specification 485",
    bustRange: "35-40 inches",
    waistRange: "29-33 inches",
    hipRange: "39-44 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_486: {
    id: "SPEC-1486",
    name: "Tailoring Specification 486",
    bustRange: "36-41 inches",
    waistRange: "30-34 inches",
    hipRange: "40-45 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_487: {
    id: "SPEC-1487",
    name: "Tailoring Specification 487",
    bustRange: "37-42 inches",
    waistRange: "31-35 inches",
    hipRange: "41-46 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_488: {
    id: "SPEC-1488",
    name: "Tailoring Specification 488",
    bustRange: "38-43 inches",
    waistRange: "32-36 inches",
    hipRange: "42-47 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_489: {
    id: "SPEC-1489",
    name: "Tailoring Specification 489",
    bustRange: "39-44 inches",
    waistRange: "33-37 inches",
    hipRange: "43-48 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_490: {
    id: "SPEC-1490",
    name: "Tailoring Specification 490",
    bustRange: "40-45 inches",
    waistRange: "34-38 inches",
    hipRange: "44-49 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_491: {
    id: "SPEC-1491",
    name: "Tailoring Specification 491",
    bustRange: "41-46 inches",
    waistRange: "35-39 inches",
    hipRange: "45-50 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_492: {
    id: "SPEC-1492",
    name: "Tailoring Specification 492",
    bustRange: "42-47 inches",
    waistRange: "36-40 inches",
    hipRange: "46-51 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_493: {
    id: "SPEC-1493",
    name: "Tailoring Specification 493",
    bustRange: "43-48 inches",
    waistRange: "37-41 inches",
    hipRange: "47-52 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_494: {
    id: "SPEC-1494",
    name: "Tailoring Specification 494",
    bustRange: "44-49 inches",
    waistRange: "38-42 inches",
    hipRange: "48-53 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_495: {
    id: "SPEC-1495",
    name: "Tailoring Specification 495",
    bustRange: "45-50 inches",
    waistRange: "24-28 inches",
    hipRange: "49-54 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_496: {
    id: "SPEC-1496",
    name: "Tailoring Specification 496",
    bustRange: "46-51 inches",
    waistRange: "25-29 inches",
    hipRange: "50-55 inches",
    recommendedHem: "Floor Length + 0 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_497: {
    id: "SPEC-1497",
    name: "Tailoring Specification 497",
    bustRange: "47-52 inches",
    waistRange: "26-30 inches",
    hipRange: "51-56 inches",
    recommendedHem: "Floor Length + 1 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_498: {
    id: "SPEC-1498",
    name: "Tailoring Specification 498",
    bustRange: "48-53 inches",
    waistRange: "27-31 inches",
    hipRange: "52-57 inches",
    recommendedHem: "Floor Length + 2 in heels",
    fitType: "Bespoke Silhouette"
  },
  spec_499: {
    id: "SPEC-1499",
    name: "Tailoring Specification 499",
    bustRange: "49-54 inches",
    waistRange: "28-32 inches",
    hipRange: "53-58 inches",
    recommendedHem: "Floor Length + 3 in heels",
    fitType: "Bespoke Silhouette"
  },
};

const CustomizerEngine = {
  calculateCustomSize(bust, waist, hip) {
    if (bust < 33 && waist < 26) return 'S';
    if (bust < 36 && waist < 29) return 'M';
    if (bust < 39 && waist < 32) return 'L';
    return 'XL';
  }
};

if (typeof window !== 'undefined') { window.CustomizerEngine = CustomizerEngine; }
if (typeof module !== 'undefined' && module.exports) { module.exports = { CustomizerEngine, CustomizerSpecifications }; }