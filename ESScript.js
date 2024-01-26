const searchParams = new URLSearchParams(window.location.search);

const jsonData = {
    "count": 119,
    "results": [
        {
            "name": "Hydrogen",
            "symbol": "H",
            "atomic-mass": 1.008,
            "density": 0.08988,
            "category": "diatomic nonmetal",
            "phase": "Gas",
            "atomic-num": 1,
            "period": 1,
            "group": 1,
            "valence-electrons": 1,
            "shells": 1,
            "melt-point": 13.99,
            "boil-point": 20.271
        },
        {
            "name": "Helium",
            "symbol": "He",
            "atomic-mass": 4.0026022,
            "density": 0.1786,
            "category": "noble gas",
            "phase": "Gas",
            "atomic-num": 2,
            "period": 1,
            "group": 18,
            "valence-electrons": 2,
            "shells": 1,
            "melt-point": 0.95,
            "boil-point": 4.222
        },
        {
            "name": "Lithium",
            "symbol": "Li",
            "atomic-mass": 6.94,
            "density": 0.534,
            "category": "alkali metal",
            "phase": "Solid",
            "atomic-num": 3,
            "period": 2,
            "group": 1,
            "valence-electrons": 1,
            "shells": 2,
            "melt-point": 453.65,
            "boil-point": 1603
        },
        {
            "name": "Beryllium",
            "symbol": "Be",
            "atomic-mass": 9.01218315,
            "density": 1.85,
            "category": "alkaline earth metal",
            "phase": "Solid",
            "atomic-num": 4,
            "period": 2,
            "group": 2,
            "valence-electrons": 2,
            "shells": 2,
            "melt-point": 1560,
            "boil-point": 2742
        },
        {
            "name": "Boron",
            "symbol": "B",
            "atomic-mass": 10.81,
            "density": 2.08,
            "category": "metalloid",
            "phase": "Solid",
            "atomic-num": 5,
            "period": 2,
            "group": 13,
            "valence-electrons": 3,
            "shells": 2,
            "melt-point": 2349,
            "boil-point": 4200
        },
        {
            "name": "Carbon",
            "symbol": "C",
            "atomic-mass": 12.011,
            "density": 1.821,
            "category": "polyatomic nonmetal",
            "phase": "Solid",
            "atomic-num": 6,
            "period": 2,
            "group": 14,
            "valence-electrons": 4,
            "shells": 2,
            "melt-point": null,
            "boil-point": null
        },
        {
            "name": "Nitrogen",
            "symbol": "N",
            "atomic-mass": 14.007,
            "density": 1.251,
            "category": "diatomic nonmetal",
            "phase": "Gas",
            "atomic-num": 7,
            "period": 2,
            "group": 15,
            "valence-electrons": 5,
            "shells": 2,
            "melt-point": 63.15,
            "boil-point": 77.355
        },
        {
            "name": "Oxygen",
            "symbol": "O",
            "atomic-mass": 15.999,
            "density": 1.429,
            "category": "diatomic nonmetal",
            "phase": "Gas",
            "atomic-num": 8,
            "period": 2,
            "group": 16,
            "valence-electrons": 6,
            "shells": 2,
            "melt-point": 54.36,
            "boil-point": 90.188
        },
        {
            "name": "Fluorine",
            "symbol": "F",
            "atomic-mass": 18.9984031636,
            "density": 1.696,
            "category": "diatomic nonmetal",
            "phase": "Gas",
            "atomic-num": 9,
            "period": 2,
            "group": 17,
            "valence-electrons": 7,
            "shells": 2,
            "melt-point": 53.48,
            "boil-point": 85.03
        },
        {
            "name": "Neon",
            "symbol": "Ne",
            "atomic-mass": 20.17976,
            "density": 0.9002,
            "category": "noble gas",
            "phase": "Gas",
            "atomic-num": 10,
            "period": 2,
            "group": 18,
            "valence-electrons": 8,
            "shells": 2,
            "melt-point": 24.56,
            "boil-point": 27.104
        },
        {
            "name": "Sodium",
            "symbol": "Na",
            "atomic-mass": 22.989769282,
            "density": 0.968,
            "category": "alkali metal",
            "phase": "Solid",
            "atomic-num": 11,
            "period": 3,
            "group": 1,
            "valence-electrons": 1,
            "shells": 3,
            "melt-point": 370.944,
            "boil-point": 1156.09
        },
        {
            "name": "Magnesium",
            "symbol": "Mg",
            "atomic-mass": 24.305,
            "density": 1.738,
            "category": "alkaline earth metal",
            "phase": "Solid",
            "atomic-num": 12,
            "period": 3,
            "group": 2,
            "valence-electrons": 2,
            "shells": 3,
            "melt-point": 923,
            "boil-point": 1363
        },
        {
            "name": "Aluminium",
            "symbol": "Al",
            "atomic-mass": 26.98153857,
            "density": 2.7,
            "category": "post-transition metal",
            "phase": "Solid",
            "atomic-num": 13,
            "period": 3,
            "group": 13,
            "valence-electrons": 3,
            "shells": 3,
            "melt-point": 933.47,
            "boil-point": 2743
        },
        {
            "name": "Silicon",
            "symbol": "Si",
            "atomic-mass": 28.085,
            "density": 2.329,
            "category": "metalloid",
            "phase": "Solid",
            "atomic-num": 14,
            "period": 3,
            "group": 14,
            "valence-electrons": 4,
            "shells": 3,
            "melt-point": 1687,
            "boil-point": 3538
        },
        {
            "name": "Phosphorus",
            "symbol": "P",
            "atomic-mass": 30.9737619985,
            "density": 1.823,
            "category": "polyatomic nonmetal",
            "phase": "Solid",
            "atomic-num": 15,
            "period": 3,
            "group": 15,
            "valence-electrons": 5,
            "shells": 3,
            "melt-point": null,
            "boil-point": null
        },
        {
            "name": "Sulfur",
            "symbol": "S",
            "atomic-mass": 32.06,
            "density": 2.07,
            "category": "polyatomic nonmetal",
            "phase": "Solid",
            "atomic-num": 16,
            "period": 3,
            "group": 16,
            "valence-electrons": 6,
            "shells": 3,
            "melt-point": 388.36,
            "boil-point": 717.8
        },
        {
            "name": "Chlorine",
            "symbol": "Cl",
            "atomic-mass": 35.45,
            "density": 3.2,
            "category": "diatomic nonmetal",
            "phase": "Gas",
            "atomic-num": 17,
            "period": 3,
            "group": 17,
            "valence-electrons": 7,
            "shells": 3,
            "melt-point": 171.6,
            "boil-point": 239.11
        },
        {
            "name": "Argon",
            "symbol": "Ar",
            "atomic-mass": 39.9481,
            "density": 1.784,
            "category": "noble gas",
            "phase": "Gas",
            "atomic-num": 18,
            "period": 3,
            "group": 18,
            "valence-electrons": 8,
            "shells": 3,
            "melt-point": 83.81,
            "boil-point": 87.302
        },
        {
            "name": "Potassium",
            "symbol": "K",
            "atomic-mass": 39.09831,
            "density": 0.862,
            "category": "alkali metal",
            "phase": "Solid",
            "atomic-num": 19,
            "period": 4,
            "group": 1,
            "valence-electrons": 1,
            "shells": 4,
            "melt-point": 336.7,
            "boil-point": 1032
        },
        {
            "name": "Calcium",
            "symbol": "Ca",
            "atomic-mass": 40.0784,
            "density": 1.55,
            "category": "alkaline earth metal",
            "phase": "Solid",
            "atomic-num": 20,
            "period": 4,
            "group": 2,
            "valence-electrons": 2,
            "shells": 4,
            "melt-point": 1115,
            "boil-point": 1757
        },
        {
            "name": "Scandium",
            "symbol": "Sc",
            "atomic-mass": 44.9559085,
            "density": 2.985,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 21,
            "period": 4,
            "group": 3,
            "valence-electrons": "Not Specified",
            "shells": 4,
            "melt-point": 1814,
            "boil-point": 3109
        },
        {
            "name": "Titanium",
            "symbol": "Ti",
            "atomic-mass": 47.8671,
            "density": 4.506,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 22,
            "period": 4,
            "group": 4,
            "valence-electrons": "Not Specified",
            "shells": 4,
            "melt-point": 1941,
            "boil-point": 3560
        },
        {
            "name": "Vanadium",
            "symbol": "V",
            "atomic-mass": 50.94151,
            "density": 6,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 23,
            "period": 4,
            "group": 5,
            "valence-electrons": "Not Specified",
            "shells": 4,
            "melt-point": 2183,
            "boil-point": 3680
        },
        {
            "name": "Chromium",
            "symbol": "Cr",
            "atomic-mass": 51.99616,
            "density": 7.19,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 24,
            "period": 4,
            "group": 6,
            "valence-electrons": "Not Specified",
            "shells": 4,
            "melt-point": 2180,
            "boil-point": 2944
        },
        {
            "name": "Manganese",
            "symbol": "Mn",
            "atomic-mass": 54.9380443,
            "density": 7.21,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 25,
            "period": 4,
            "group": 7,
            "valence-electrons": "Not Specified",
            "shells": 4,
            "melt-point": 1519,
            "boil-point": 2334
        },
        {
            "name": "Iron",
            "symbol": "Fe",
            "atomic-mass": 55.8452,
            "density": 7.874,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 26,
            "period": 4,
            "group": 8,
            "valence-electrons": "Not Specified",
            "shells": 4,
            "melt-point": 1811,
            "boil-point": 3134
        },
        {
            "name": "Cobalt",
            "symbol": "Co",
            "atomic-mass": 58.9331944,
            "density": 8.9,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 27,
            "period": 4,
            "group": 9,
            "valence-electrons": "Not Specified",
            "shells": 4,
            "melt-point": 1768,
            "boil-point": 3200
        },
        {
            "name": "Nickel",
            "symbol": "Ni",
            "atomic-mass": 58.69344,
            "density": 8.908,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 28,
            "period": 4,
            "group": 10,
            "valence-electrons": "Not Specified",
            "shells": 4,
            "melt-point": 1728,
            "boil-point": 3003
        },
        {
            "name": "Copper",
            "symbol": "Cu",
            "atomic-mass": 63.5463,
            "density": 8.96,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 29,
            "period": 4,
            "group": 11,
            "valence-electrons": "Not Specified",
            "shells": 4,
            "melt-point": 1357.77,
            "boil-point": 2835
        },
        {
            "name": "Zinc",
            "symbol": "Zn",
            "atomic-mass": 65.382,
            "density": 7.14,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 30,
            "period": 4,
            "group": 12,
            "valence-electrons": "Not Specified",
            "shells": 4,
            "melt-point": 692.68,
            "boil-point": 1180
        },
        {
            "name": "Gallium",
            "symbol": "Ga",
            "atomic-mass": 69.7231,
            "density": 5.91,
            "category": "post-transition metal",
            "phase": "Solid",
            "atomic-num": 31,
            "period": 4,
            "group": 13,
            "valence-electrons": 3,
            "shells": 4,
            "melt-point": 302.9146,
            "boil-point": 2673
        },
        {
            "name": "Germanium",
            "symbol": "Ge",
            "atomic-mass": 72.6308,
            "density": 5.323,
            "category": "metalloid",
            "phase": "Solid",
            "atomic-num": 32,
            "period": 4,
            "group": 14,
            "valence-electrons": 4,
            "shells": 4,
            "melt-point": 1211.4,
            "boil-point": 3106
        },
        {
            "name": "Arsenic",
            "symbol": "As",
            "atomic-mass": 74.9215956,
            "density": 5.727,
            "category": "metalloid",
            "phase": "Solid",
            "atomic-num": 33,
            "period": 4,
            "group": 15,
            "valence-electrons": 5,
            "shells": 4,
            "melt-point": null,
            "boil-point": null
        },
        {
            "name": "Selenium",
            "symbol": "Se",
            "atomic-mass": 78.9718,
            "density": 4.81,
            "category": "polyatomic nonmetal",
            "phase": "Solid",
            "atomic-num": 34,
            "period": 4,
            "group": 16,
            "valence-electrons": 6,
            "shells": 4,
            "melt-point": 494,
            "boil-point": 958
        },
        {
            "name": "Bromine",
            "symbol": "Br",
            "atomic-mass": 79.904,
            "density": 3.1028,
            "category": "diatomic nonmetal",
            "phase": "Liquid",
            "atomic-num": 35,
            "period": 4,
            "group": 17,
            "valence-electrons": 7,
            "shells": 4,
            "melt-point": 265.8,
            "boil-point": 332
        },
        {
            "name": "Krypton",
            "symbol": "Kr",
            "atomic-mass": 83.7982,
            "density": 3.749,
            "category": "noble gas",
            "phase": "Gas",
            "atomic-num": 36,
            "period": 4,
            "group": 18,
            "valence-electrons": 8,
            "shells": 4,
            "melt-point": 115.78,
            "boil-point": 119.93
        },
        {
            "name": "Rubidium",
            "symbol": "Rb",
            "atomic-mass": 85.46783,
            "density": 1.532,
            "category": "alkali metal",
            "phase": "Solid",
            "atomic-num": 37,
            "period": 5,
            "group": 1,
            "valence-electrons": 1,
            "shells": 5,
            "melt-point": 312.45,
            "boil-point": 961
        },
        {
            "name": "Strontium",
            "symbol": "Sr",
            "atomic-mass": 87.621,
            "density": 2.64,
            "category": "alkaline earth metal",
            "phase": "Solid",
            "atomic-num": 38,
            "period": 5,
            "group": 2,
            "valence-electrons": 2,
            "shells": 5,
            "melt-point": 1050,
            "boil-point": 1650
        },
        {
            "name": "Yttrium",
            "symbol": "Y",
            "atomic-mass": 88.905842,
            "density": 4.472,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 39,
            "period": 5,
            "group": 3,
            "valence-electrons": "Not Specified",
            "shells": 5,
            "melt-point": 1799,
            "boil-point": 3203
        },
        {
            "name": "Zirconium",
            "symbol": "Zr",
            "atomic-mass": 91.2242,
            "density": 6.52,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 40,
            "period": 5,
            "group": 4,
            "valence-electrons": "Not Specified",
            "shells": 5,
            "melt-point": 2128,
            "boil-point": 4650
        },
        {
            "name": "Niobium",
            "symbol": "Nb",
            "atomic-mass": 92.906372,
            "density": 8.57,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 41,
            "period": 5,
            "group": 5,
            "valence-electrons": "Not Specified",
            "shells": 5,
            "melt-point": 2750,
            "boil-point": 5017
        },
        {
            "name": "Molybdenum",
            "symbol": "Mo",
            "atomic-mass": 95.951,
            "density": 10.28,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 42,
            "period": 5,
            "group": 6,
            "valence-electrons": "Not Specified",
            "shells": 5,
            "melt-point": 2896,
            "boil-point": 4912
        },
        {
            "name": "Technetium",
            "symbol": "Tc",
            "atomic-mass": 98,
            "density": 11,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 43,
            "period": 5,
            "group": 7,
            "valence-electrons": "Not Specified",
            "shells": 5,
            "melt-point": 2430,
            "boil-point": 4538
        },
        {
            "name": "Ruthenium",
            "symbol": "Ru",
            "atomic-mass": 101.072,
            "density": 12.45,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 44,
            "period": 5,
            "group": 8,
            "valence-electrons": "Not Specified",
            "shells": 5,
            "melt-point": 2607,
            "boil-point": 4423
        },
        {
            "name": "Rhodium",
            "symbol": "Rh",
            "atomic-mass": 102.905502,
            "density": 12.41,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 45,
            "period": 5,
            "group": 9,
            "valence-electrons": "Not Specified",
            "shells": 5,
            "melt-point": 2237,
            "boil-point": 3968
        },
        {
            "name": "Palladium",
            "symbol": "Pd",
            "atomic-mass": 106.421,
            "density": 12.023,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 46,
            "period": 5,
            "group": 10,
            "valence-electrons": "Not Specified",
            "shells": 5,
            "melt-point": 1828.05,
            "boil-point": 3236
        },
        {
            "name": "Silver",
            "symbol": "Ag",
            "atomic-mass": 107.86822,
            "density": 10.49,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 47,
            "period": 5,
            "group": 11,
            "valence-electrons": "Not Specified",
            "shells": 5,
            "melt-point": 1234.93,
            "boil-point": 2435
        },
        {
            "name": "Cadmium",
            "symbol": "Cd",
            "atomic-mass": 112.4144,
            "density": 8.65,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 48,
            "period": 5,
            "group": 12,
            "valence-electrons": "Not Specified",
            "shells": 5,
            "melt-point": 594.22,
            "boil-point": 1040
        },
        {
            "name": "Indium",
            "symbol": "In",
            "atomic-mass": 114.8181,
            "density": 7.31,
            "category": "post-transition metal",
            "phase": "Solid",
            "atomic-num": 49,
            "period": 5,
            "group": 13,
            "valence-electrons": 3,
            "shells": 5,
            "melt-point": 429.7485,
            "boil-point": 2345
        },
        {
            "name": "Tin",
            "symbol": "Sn",
            "atomic-mass": 118.7107,
            "density": 7.365,
            "category": "post-transition metal",
            "phase": "Solid",
            "atomic-num": 50,
            "period": 5,
            "group": 14,
            "valence-electrons": 4,
            "shells": 5,
            "melt-point": 505.08,
            "boil-point": 2875
        },
        {
            "name": "Antimony",
            "symbol": "Sb",
            "atomic-mass": 121.7601,
            "density": 6.697,
            "category": "metalloid",
            "phase": "Solid",
            "atomic-num": 51,
            "period": 5,
            "group": 15,
            "valence-electrons": 5,
            "shells": 5,
            "melt-point": 903.78,
            "boil-point": 1908
        },
        {
            "name": "Tellurium",
            "symbol": "Te",
            "atomic-mass": 127.603,
            "density": 6.24,
            "category": "metalloid",
            "phase": "Solid",
            "atomic-num": 52,
            "period": 5,
            "group": 16,
            "valence-electrons": 6,
            "shells": 5,
            "melt-point": 722.66,
            "boil-point": 1261
        },
        {
            "name": "Iodine",
            "symbol": "I",
            "atomic-mass": 126.904473,
            "density": 4.933,
            "category": "diatomic nonmetal",
            "phase": "Solid",
            "atomic-num": 53,
            "period": 5,
            "group": 17,
            "valence-electrons": 7,
            "shells": 5,
            "melt-point": 386.85,
            "boil-point": 457.4
        },
        {
            "name": "Xenon",
            "symbol": "Xe",
            "atomic-mass": 131.2936,
            "density": 5.894,
            "category": "noble gas",
            "phase": "Gas",
            "atomic-num": 54,
            "period": 5,
            "group": 18,
            "valence-electrons": 8,
            "shells": 5,
            "melt-point": 161.4,
            "boil-point": 165.051
        },
        {
            "name": "Cesium",
            "symbol": "Cs",
            "atomic-mass": 132.905451966,
            "density": 1.93,
            "category": "alkali metal",
            "phase": "Solid",
            "atomic-num": 55,
            "period": 6,
            "group": 1,
            "valence-electrons": 1,
            "shells": 6,
            "melt-point": 301.7,
            "boil-point": 944
        },
        {
            "name": "Barium",
            "symbol": "Ba",
            "atomic-mass": 137.3277,
            "density": 3.51,
            "category": "alkaline earth metal",
            "phase": "Solid",
            "atomic-num": 56,
            "period": 6,
            "group": 2,
            "valence-electrons": 2,
            "shells": 6,
            "melt-point": 1000,
            "boil-point": 2118
        },
        {
            "name": "Lanthanum",
            "symbol": "La",
            "atomic-mass": 138.905477,
            "density": 6.162,
            "category": "lanthanide",
            "phase": "Solid",
            "atomic-num": 57,
            "period": 6,
            "group": 3,
            "valence-electrons": "Not Specified",
            "shells": 6,
            "melt-point": 1193,
            "boil-point": 3737
        },
        {
            "name": "Cerium",
            "symbol": "Ce",
            "atomic-mass": 140.1161,
            "density": 6.77,
            "category": "lanthanide",
            "phase": "Solid",
            "atomic-num": 58,
            "period": 6,
            "group": 4,
            "valence-electrons": "Not Specified",
            "shells": 6,
            "melt-point": 1068,
            "boil-point": 3716
        },
        {
            "name": "Praseodymium",
            "symbol": "Pr",
            "atomic-mass": 140.907662,
            "density": 6.77,
            "category": "lanthanide",
            "phase": "Solid",
            "atomic-num": 59,
            "period": 6,
            "group": 5,
            "valence-electrons": "Not Specified",
            "shells": 6,
            "melt-point": 1208,
            "boil-point": 3403
        },
        {
            "name": "Neodymium",
            "symbol": "Nd",
            "atomic-mass": 144.2423,
            "density": 7.01,
            "category": "lanthanide",
            "phase": "Solid",
            "atomic-num": 60,
            "period": 6,
            "group": 6,
            "valence-electrons": "Not Specified",
            "shells": 6,
            "melt-point": 1297,
            "boil-point": 3347
        },
        {
            "name": "Promethium",
            "symbol": "Pm",
            "atomic-mass": 145,
            "density": 7.26,
            "category": "lanthanide",
            "phase": "Solid",
            "atomic-num": 61,
            "period": 6,
            "group": 7,
            "valence-electrons": "Not Specified",
            "shells": 6,
            "melt-point": 1315,
            "boil-point": 3273
        },
        {
            "name": "Samarium",
            "symbol": "Sm",
            "atomic-mass": 150.362,
            "density": 7.52,
            "category": "lanthanide",
            "phase": "Solid",
            "atomic-num": 62,
            "period": 6,
            "group": 8,
            "valence-electrons": "Not Specified",
            "shells": 6,
            "melt-point": 1345,
            "boil-point": 2173
        },
        {
            "name": "Europium",
            "symbol": "Eu",
            "atomic-mass": 151.9641,
            "density": 5.264,
            "category": "lanthanide",
            "phase": "Solid",
            "atomic-num": 63,
            "period": 6,
            "group": 9,
            "valence-electrons": "Not Specified",
            "shells": 6,
            "melt-point": 1099,
            "boil-point": 1802
        },
        {
            "name": "Gadolinium",
            "symbol": "Gd",
            "atomic-mass": 157.253,
            "density": 7.9,
            "category": "lanthanide",
            "phase": "Solid",
            "atomic-num": 64,
            "period": 6,
            "group": 10,
            "valence-electrons": "Not Specified",
            "shells": 6,
            "melt-point": 1585,
            "boil-point": 3273
        },
        {
            "name": "Terbium",
            "symbol": "Tb",
            "atomic-mass": 158.925352,
            "density": 8.23,
            "category": "lanthanide",
            "phase": "Solid",
            "atomic-num": 65,
            "period": 6,
            "group": 11,
            "valence-electrons": "Not Specified",
            "shells": 6,
            "melt-point": 1629,
            "boil-point": 3396
        },
        {
            "name": "Dysprosium",
            "symbol": "Dy",
            "atomic-mass": 162.5001,
            "density": 8.54,
            "category": "lanthanide",
            "phase": "Solid",
            "atomic-num": 66,
            "period": 6,
            "group": 12,
            "valence-electrons": "Not Specified",
            "shells": 6,
            "melt-point": 1680,
            "boil-point": 2840
        },
        {
            "name": "Holmium",
            "symbol": "Ho",
            "atomic-mass": 164.930332,
            "density": 8.79,
            "category": "lanthanide",
            "phase": "Solid",
            "atomic-num": 67,
            "period": 6,
            "group": 13,
            "valence-electrons": 3,
            "shells": 6,
            "melt-point": 1734,
            "boil-point": 2873
        },
        {
            "name": "Erbium",
            "symbol": "Er",
            "atomic-mass": 167.2593,
            "density": 9.066,
            "category": "lanthanide",
            "phase": "Solid",
            "atomic-num": 68,
            "period": 6,
            "group": 14,
            "valence-electrons": 4,
            "shells": 6,
            "melt-point": 1802,
            "boil-point": 3141
        },
        {
            "name": "Thulium",
            "symbol": "Tm",
            "atomic-mass": 168.934222,
            "density": 9.32,
            "category": "lanthanide",
            "phase": "Solid",
            "atomic-num": 69,
            "period": 6,
            "group": 15,
            "valence-electrons": 5,
            "shells": 6,
            "melt-point": 1818,
            "boil-point": 2223
        },
        {
            "name": "Ytterbium",
            "symbol": "Yb",
            "atomic-mass": 173.0451,
            "density": 6.9,
            "category": "lanthanide",
            "phase": "Solid",
            "atomic-num": 70,
            "period": 6,
            "group": 16,
            "valence-electrons": 6,
            "shells": 6,
            "melt-point": 1097,
            "boil-point": 1469
        },
        {
            "name": "Lutetium",
            "symbol": "Lu",
            "atomic-mass": 174.96681,
            "density": 9.841,
            "category": "lanthanide",
            "phase": "Solid",
            "atomic-num": 71,
            "period": 6,
            "group": 17,
            "valence-electrons": 7,
            "shells": 6,
            "melt-point": 1925,
            "boil-point": 3675
        },
        {
            "name": "Hafnium",
            "symbol": "Hf",
            "atomic-mass": 178.492,
            "density": 13.31,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 72,
            "period": 6,
            "group": 4,
            "valence-electrons": "Not Specified",
            "shells": 6,
            "melt-point": 2506,
            "boil-point": 4876
        },
        {
            "name": "Tantalum",
            "symbol": "Ta",
            "atomic-mass": 180.947882,
            "density": 16.69,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 73,
            "period": 6,
            "group": 5,
            "valence-electrons": "Not Specified",
            "shells": 6,
            "melt-point": 3290,
            "boil-point": 5731
        },
        {
            "name": "Tungsten",
            "symbol": "W",
            "atomic-mass": 183.841,
            "density": 19.25,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 74,
            "period": 6,
            "group": 6,
            "valence-electrons": "Not Specified",
            "shells": 6,
            "melt-point": 3695,
            "boil-point": 6203
        },
        {
            "name": "Rhenium",
            "symbol": "Re",
            "atomic-mass": 186.2071,
            "density": 21.02,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 75,
            "period": 6,
            "group": 7,
            "valence-electrons": "Not Specified",
            "shells": 6,
            "melt-point": 3459,
            "boil-point": 5869
        },
        {
            "name": "Osmium",
            "symbol": "Os",
            "atomic-mass": 190.233,
            "density": 22.59,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 76,
            "period": 6,
            "group": 8,
            "valence-electrons": "Not Specified",
            "shells": 6,
            "melt-point": 3306,
            "boil-point": 5285
        },
        {
            "name": "Iridium",
            "symbol": "Ir",
            "atomic-mass": 192.2173,
            "density": 22.56,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 77,
            "period": 6,
            "group": 9,
            "valence-electrons": "Not Specified",
            "shells": 6,
            "melt-point": 2719,
            "boil-point": 4403
        },
        {
            "name": "Platinum",
            "symbol": "Pt",
            "atomic-mass": 195.0849,
            "density": 21.45,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 78,
            "period": 6,
            "group": 10,
            "valence-electrons": "Not Specified",
            "shells": 6,
            "melt-point": 2041.4,
            "boil-point": 4098
        },
        {
            "name": "Gold",
            "symbol": "Au",
            "atomic-mass": 196.9665695,
            "density": 19.3,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 79,
            "period": 6,
            "group": 11,
            "valence-electrons": "Not Specified",
            "shells": 6,
            "melt-point": 1337.33,
            "boil-point": 3243
        },
        {
            "name": "Mercury",
            "symbol": "Hg",
            "atomic-mass": 200.5923,
            "density": 13.534,
            "category": "transition metal",
            "phase": "Liquid",
            "atomic-num": 80,
            "period": 6,
            "group": 12,
            "valence-electrons": "Not Specified",
            "shells": 6,
            "melt-point": 234.321,
            "boil-point": 629.88
        },
        {
            "name": "Thallium",
            "symbol": "Tl",
            "atomic-mass": 204.38,
            "density": 11.85,
            "category": "post-transition metal",
            "phase": "Solid",
            "atomic-num": 81,
            "period": 6,
            "group": 13,
            "valence-electrons": 3,
            "shells": 6,
            "melt-point": 577,
            "boil-point": 1746
        },
        {
            "name": "Lead",
            "symbol": "Pb",
            "atomic-mass": 207.21,
            "density": 11.34,
            "category": "post-transition metal",
            "phase": "Solid",
            "atomic-num": 82,
            "period": 6,
            "group": 14,
            "valence-electrons": 4,
            "shells": 6,
            "melt-point": 600.61,
            "boil-point": 2022
        },
        {
            "name": "Bismuth",
            "symbol": "Bi",
            "atomic-mass": 208.980401,
            "density": 9.78,
            "category": "post-transition metal",
            "phase": "Solid",
            "atomic-num": 83,
            "period": 6,
            "group": 15,
            "valence-electrons": 5,
            "shells": 6,
            "melt-point": 544.7,
            "boil-point": 1837
        },
        {
            "name": "Polonium",
            "symbol": "Po",
            "atomic-mass": 209,
            "density": 9.196,
            "category": "metalloid",
            "phase": "Solid",
            "atomic-num": 84,
            "period": 6,
            "group": 16,
            "valence-electrons": 6,
            "shells": 6,
            "melt-point": 527,
            "boil-point": 1235
        },
        {
            "name": "Astatine",
            "symbol": "At",
            "atomic-mass": 210,
            "density": 6.35,
            "category": "metalloid",
            "phase": "Solid",
            "atomic-num": 85,
            "period": 6,
            "group": 17,
            "valence-electrons": 7,
            "shells": 6,
            "melt-point": 575,
            "boil-point": 610
        },
        {
            "name": "Radon",
            "symbol": "Rn",
            "atomic-mass": 222,
            "density": 9.73,
            "category": "noble gas",
            "phase": "Gas",
            "atomic-num": 86,
            "period": 6,
            "group": 18,
            "valence-electrons": 8,
            "shells": 6,
            "melt-point": 202,
            "boil-point": 211.5
        },
        {
            "name": "Francium",
            "symbol": "Fr",
            "atomic-mass": 223,
            "density": 1.87,
            "category": "alkali metal",
            "phase": "Solid",
            "atomic-num": 87,
            "period": 7,
            "group": 1,
            "valence-electrons": 1,
            "shells": 7,
            "melt-point": 300,
            "boil-point": 950
        },
        {
            "name": "Radium",
            "symbol": "Ra",
            "atomic-mass": 226,
            "density": 5.5,
            "category": "alkaline earth metal",
            "phase": "Solid",
            "atomic-num": 88,
            "period": 7,
            "group": 2,
            "valence-electrons": 2,
            "shells": 7,
            "melt-point": 1233,
            "boil-point": 2010
        },
        {
            "name": "Actinium",
            "symbol": "Ac",
            "atomic-mass": 227,
            "density": 10,
            "category": "actinide",
            "phase": "Solid",
            "atomic-num": 89,
            "period": 7,
            "group": 3,
            "valence-electrons": "Not Specified",
            "shells": 7,
            "melt-point": 1500,
            "boil-point": 3500
        },
        {
            "name": "Thorium",
            "symbol": "Th",
            "atomic-mass": 232.03774,
            "density": 11.724,
            "category": "actinide",
            "phase": "Solid",
            "atomic-num": 90,
            "period": 7,
            "group": 4,
            "valence-electrons": "Not Specified",
            "shells": 7,
            "melt-point": 2023,
            "boil-point": 5061
        },
        {
            "name": "Protactinium",
            "symbol": "Pa",
            "atomic-mass": 231.035882,
            "density": 15.37,
            "category": "actinide",
            "phase": "Solid",
            "atomic-num": 91,
            "period": 7,
            "group": 5,
            "valence-electrons": "Not Specified",
            "shells": 7,
            "melt-point": 1841,
            "boil-point": 4300
        },
        {
            "name": "Uranium",
            "symbol": "U",
            "atomic-mass": 238.028913,
            "density": 19.1,
            "category": "actinide",
            "phase": "Solid",
            "atomic-num": 92,
            "period": 7,
            "group": 6,
            "valence-electrons": "Not Specified",
            "shells": 7,
            "melt-point": 1405.3,
            "boil-point": 4404
        },
        {
            "name": "Neptunium",
            "symbol": "Np",
            "atomic-mass": 237,
            "density": 20.45,
            "category": "actinide",
            "phase": "Solid",
            "atomic-num": 93,
            "period": 7,
            "group": 7,
            "valence-electrons": "Not Specified",
            "shells": 7,
            "melt-point": 912,
            "boil-point": 4447
        },
        {
            "name": "Plutonium",
            "symbol": "Pu",
            "atomic-mass": 244,
            "density": 19.816,
            "category": "actinide",
            "phase": "Solid",
            "atomic-num": 94,
            "period": 7,
            "group": 8,
            "valence-electrons": "Not Specified",
            "shells": 7,
            "melt-point": 912.5,
            "boil-point": 3505
        },
        {
            "name": "Americium",
            "symbol": "Am",
            "atomic-mass": 243,
            "density": 12,
            "category": "actinide",
            "phase": "Solid",
            "atomic-num": 95,
            "period": 7,
            "group": 9,
            "valence-electrons": "Not Specified",
            "shells": 7,
            "melt-point": 1449,
            "boil-point": 2880
        },
        {
            "name": "Curium",
            "symbol": "Cm",
            "atomic-mass": 247,
            "density": 13.51,
            "category": "actinide",
            "phase": "Solid",
            "atomic-num": 96,
            "period": 7,
            "group": 10,
            "valence-electrons": "Not Specified",
            "shells": 7,
            "melt-point": 1613,
            "boil-point": 3383
        },
        {
            "name": "Berkelium",
            "symbol": "Bk",
            "atomic-mass": 247,
            "density": 14.78,
            "category": "actinide",
            "phase": "Solid",
            "atomic-num": 97,
            "period": 7,
            "group": 11,
            "valence-electrons": "Not Specified",
            "shells": 7,
            "melt-point": 1259,
            "boil-point": 2900
        },
        {
            "name": "Californium",
            "symbol": "Cf",
            "atomic-mass": 251,
            "density": 15.1,
            "category": "actinide",
            "phase": "Solid",
            "atomic-num": 98,
            "period": 7,
            "group": 12,
            "valence-electrons": "Not Specified",
            "shells": 7,
            "melt-point": 1173,
            "boil-point": 1743
        },
        {
            "name": "Einsteinium",
            "symbol": "Es",
            "atomic-mass": 252,
            "density": 8.84,
            "category": "actinide",
            "phase": "Solid",
            "atomic-num": 99,
            "period": 7,
            "group": 13,
            "valence-electrons": 3,
            "shells": 7,
            "melt-point": 1133,
            "boil-point": 1269
        },
        {
            "name": "Fermium",
            "symbol": "Fm",
            "atomic-mass": 257,
            "density": null,
            "category": "actinide",
            "phase": "Solid",
            "atomic-num": 100,
            "period": 7,
            "group": 14,
            "valence-electrons": 4,
            "shells": 7,
            "melt-point": 1800,
            "boil-point": null
        },
        {
            "name": "Mendelevium",
            "symbol": "Md",
            "atomic-mass": 258,
            "density": null,
            "category": "actinide",
            "phase": "Solid",
            "atomic-num": 101,
            "period": 7,
            "group": 15,
            "valence-electrons": 5,
            "shells": 7,
            "melt-point": 1100,
            "boil-point": null
        },
        {
            "name": "Nobelium",
            "symbol": "No",
            "atomic-mass": 259,
            "density": null,
            "category": "actinide",
            "phase": "Solid",
            "atomic-num": 102,
            "period": 7,
            "group": 16,
            "valence-electrons": 6,
            "shells": 7,
            "melt-point": 1100,
            "boil-point": null
        },
        {
            "name": "Lawrencium",
            "symbol": "Lr",
            "atomic-mass": 266,
            "density": null,
            "category": "actinide",
            "phase": "Solid",
            "atomic-num": 103,
            "period": 7,
            "group": 17,
            "valence-electrons": 7,
            "shells": 7,
            "melt-point": 1900,
            "boil-point": null
        },
        {
            "name": "Rutherfordium",
            "symbol": "Rf",
            "atomic-mass": 267,
            "density": 23.2,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 104,
            "period": 7,
            "group": 4,
            "valence-electrons": "Not Specified",
            "shells": 7,
            "melt-point": 2400,
            "boil-point": 5800
        },
        {
            "name": "Dubnium",
            "symbol": "Db",
            "atomic-mass": 268,
            "density": 29.3,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 105,
            "period": 7,
            "group": 5,
            "valence-electrons": "Not Specified",
            "shells": 7,
            "melt-point": null,
            "boil-point": null
        },
        {
            "name": "Seaborgium",
            "symbol": "Sg",
            "atomic-mass": 269,
            "density": 35,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 106,
            "period": 7,
            "group": 6,
            "valence-electrons": "Not Specified",
            "shells": 7,
            "melt-point": null,
            "boil-point": null
        },
        {
            "name": "Bohrium",
            "symbol": "Bh",
            "atomic-mass": 270,
            "density": 37.1,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 107,
            "period": 7,
            "group": 7,
            "valence-electrons": "Not Specified",
            "shells": 7,
            "melt-point": null,
            "boil-point": null
        },
        {
            "name": "Hassium",
            "symbol": "Hs",
            "atomic-mass": 269,
            "density": 40.7,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 108,
            "period": 7,
            "group": 8,
            "valence-electrons": "Not Specified",
            "shells": 7,
            "melt-point": 126,
            "boil-point": null
        },
        {
            "name": "Meitnerium",
            "symbol": "Mt",
            "atomic-mass": 278,
            "density": 37.4,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 109,
            "period": 7,
            "group": 9,
            "valence-electrons": "Not Specified",
            "shells": 7,
            "melt-point": null,
            "boil-point": null
        },
        {
            "name": "Darmstadtium",
            "symbol": "Ds",
            "atomic-mass": 281,
            "density": 34.8,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 110,
            "period": 7,
            "group": 10,
            "valence-electrons": "Not Specified",
            "shells": 7,
            "melt-point": null,
            "boil-point": null
        },
        {
            "name": "Roentgenium",
            "symbol": "Rg",
            "atomic-mass": 282,
            "density": 28.7,
            "category": "transition metal",
            "phase": "Solid",
            "atomic-num": 111,
            "period": 7,
            "group": 11,
            "valence-electrons": "Not Specified",
            "shells": 7,
            "melt-point": null,
            "boil-point": null
        },
        {
            "name": "Copernicium",
            "symbol": "Cn",
            "atomic-mass": 285,
            "density": 23.7,
            "category": "transition metal",
            "phase": "Gas",
            "atomic-num": 112,
            "period": 7,
            "group": 12,
            "valence-electrons": "Not Specified",
            "shells": 7,
            "melt-point": null,
            "boil-point": 3570
        },
        {
            "name": "Nihonium",
            "symbol": "Nh",
            "atomic-mass": 286,
            "density": 16,
            "category": "post-transition metal",
            "phase": "Solid",
            "atomic-num": 113,
            "period": 7,
            "group": 13,
            "valence-electrons": 3,
            "shells": 7,
            "melt-point": 700,
            "boil-point": 1430
        },
        {
            "name": "Flerovium",
            "symbol": "Fl",
            "atomic-mass": 289,
            "density": 14,
            "category": "post-transition metal",
            "phase": "Solid",
            "atomic-num": 114,
            "period": 7,
            "group": 14,
            "valence-electrons": 4,
            "shells": 7,
            "melt-point": 340,
            "boil-point": 420
        },
        {
            "name": "Moscovium",
            "symbol": "Mc",
            "atomic-mass": 289,
            "density": 13.5,
            "category": "post-transition metal",
            "phase": "Solid",
            "atomic-num": 115,
            "period": 7,
            "group": 15,
            "valence-electrons": 5,
            "shells": 7,
            "melt-point": 670,
            "boil-point": 1400
        },
        {
            "name": "Livermorium",
            "symbol": "Lv",
            "atomic-mass": 293,
            "density": 12.9,
            "category": "post-transition metal",
            "phase": "Solid",
            "atomic-num": 116,
            "period": 7,
            "group": 16,
            "valence-electrons": 6,
            "shells": 7,
            "melt-point": 709,
            "boil-point": 1085
        },
        {
            "name": "Tennessine",
            "symbol": "Ts",
            "atomic-mass": 294,
            "density": 7.17,
            "category": "metalloid",
            "phase": "Solid",
            "atomic-num": 117,
            "period": 7,
            "group": 17,
            "valence-electrons": 7,
            "shells": 7,
            "melt-point": 723,
            "boil-point": 883
        },
        {
            "name": "Oganesson",
            "symbol": "Og",
            "atomic-mass": 294,
            "density": 4.95,
            "category": "noble gas",
            "phase": "Solid",
            "atomic-num": 118,
            "period": 7,
            "group": 18,
            "valence-electrons": 8,
            "shells": 7,
            "melt-point": null,
            "boil-point": 350
        },
        {
            "name": "Ununennium",
            "symbol": "Uue",
            "atomic-mass": 315,
            "density": 3,
            "category": "alkali metal",
            "phase": "Solid",
            "atomic-num": 119,
            "period": 8,
            "group": 1,
            "valence-electrons": 1,
            "shells": 8,
            "melt-point": null,
            "boil-point": 630
        }
    ]
}

console.log(jsonData["count"])
function getData() {



    fetch('https://kineticzephyr.onrender.com/periodictable/')
    .then(response => response.json())
    .then(data => {
        let dataResultArea = document.getElementById('dataResultPre')

        let p = document.createElement('p')

        let valenceElectrons = "";

        if (searchParams.has("protons"))
        {
            if (parseInt(searchParams.get("protons")) === 2)
            {
                valenceElectrons = "2";
            }

            else if ((parseInt(JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["xpos"])) <= 2) || (parseInt(JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["xpos"])) >= 13))
            {
                valenceElectrons = JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["xpos"]) % 10;
            }

            else
            {
                valenceElectrons = "None Spesific";
            }

            let text = document.createTextNode(
                "  Name: " + JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["name"], null, 2).slice(1, -1) + "\n" +
                "  Symbol: " + JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["symbol"], null, 2).slice(1, -1) + "\n" +
                "  Atomic Mass: " + JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["atomic_mass"], null, 2) + "\n" +
                "  Density: " + JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["density"], null, 2) + "\n" +
                "  Category: " + JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["category"], null, 2).slice(1, -1) + "\n" +
                "  Phase: " + JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["phase"], null, 2).slice(1, -1) + "\n" +
                "  Atomic Number: " + JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["number"], null, 2) + "\n" +
                "  Period: " + JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["period"], null, 2) + "\n" +
                "  Group: " + JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["xpos"], null, 2) + "\n" +
                "  Valence Electrons: " + valenceElectrons + "\n" +
                "  Electron Configuration: " + JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["electron_configuration"], null, 2).slice(1, -1) + "\n" +
                "  Shells: " + JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["period"], null, 2) + "\n" +
                "  Melting Point: " + JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["melt"], null, 2) + "\n" +
                "  Boiling Point: " + JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["boil"], null, 2) + "\n"
                );

            p.appendChild(text);

            dataResultArea.appendChild(p);
        }

        else if (searchParams.has("name"))
        {
            let atomicNum = 0;

            for (var i = 0; i <= 118; i++)
            {
                if (((JSON.stringify(data["data"][i]["name"]).slice(1, -1).toUpperCase()) === searchParams.get("name")))
                {
                    atomicNum = i;
                    break
                }
            }

            if ((atomicNum + 1) === 2)
            {
                valenceElectrons = "2";
            }

            else if ((parseInt(JSON.stringify(data["data"][atomicNum])) <= 2) || (parseInt(JSON.stringify(data["data"][atomicNum]["xpos"])) >= 13))
            {
                valenceElectrons = JSON.stringify(data["data"][atomicNum]["xpos"]) % 10;
            }

            else
            {
                valenceElectrons = "None Spesific";
            }

            let text = document.createTextNode(
                "  Name: " + JSON.stringify(data["data"][atomicNum]["name"], null, 2).slice(1, -1) + "\n" +
                "  Symbol: " + JSON.stringify(data["data"][atomicNum]["symbol"], null, 2).slice(1, -1) + "\n" +
                "  Atomic Mass: " + JSON.stringify(data["data"][atomicNum]["atomic_mass"], null, 2) + "\n" +
                "  Density: " + JSON.stringify(data["data"][atomicNum]["density"], null, 2) + "\n" +
                "  Category: " + JSON.stringify(data["data"][atomicNum]["category"], null, 2).slice(1, -1) + "\n" +
                "  Phase: " + JSON.stringify(data["data"][atomicNum]["phase"], null, 2).slice(1, -1) + "\n" +
                "  Atomic Number: " + JSON.stringify(data["data"][atomicNum]["number"], null, 2) + "\n" +
                "  Period: " + JSON.stringify(data["data"][atomicNum]["period"], null, 2) + "\n" +
                "  Group: " + JSON.stringify(data["data"][atomicNum]["xpos"], null, 2) + "\n" +
                "  Valence Electrons: " + valenceElectrons + "\n" +
                "  Electron Configuration: " + JSON.stringify(data["data"][atomicNum]["electron_configuration"], null, 2).slice(1, -1) + "\n" +
                "  Shells: " + JSON.stringify(data["data"][atomicNum]["period"], null, 2) + "\n" +
                "  Melting Point: " + JSON.stringify(data["data"][atomicNum]["melt"], null, 2) + "\n" +
                "  Boiling Point: " + JSON.stringify(data["data"][atomicNum]["boil"], null, 2) + "\n"
            )

            p.appendChild(text);

            dataResultArea.appendChild(p);
        }

        else if (searchParams.has("symbol"))
        {
            let atomicNum = 0;

            for (var i = 0; i <= 118; i++)
            {
                if (((JSON.stringify(data["data"][i]["symbol"]).slice(1, -1).toUpperCase()) === searchParams.get("symbol")))
                {
                    atomicNum = i;
                    break
                }
            }
            
            if ((atomicNum + 1) === 2)
            {
                valenceElectrons = "2";
            }

            else if ((parseInt(JSON.stringify(data["data"][atomicNum])) <= 2) || (parseInt(JSON.stringify(data["data"][atomicNum]["xpos"])) >= 13))
            {
                valenceElectrons = JSON.stringify(data["data"][atomicNum]["xpos"]) % 10;
            }

            else
            {
                valenceElectrons = "None Spesific";
            }

            let text = document.createTextNode(
                "  Name: " + JSON.stringify(data["data"][atomicNum]["name"], null, 2).slice(1, -1) + "\n" +
                "  Symbol: " + JSON.stringify(data["data"][atomicNum]["symbol"], null, 2).slice(1, -1) + "\n" +
                "  Atomic Mass: " + JSON.stringify(data["data"][atomicNum]["atomic_mass"], null, 2) + "\n" +
                "  Density: " + JSON.stringify(data["data"][atomicNum]["density"], null, 2) + "\n" +
                "  Category: " + JSON.stringify(data["data"][atomicNum]["category"], null, 2).slice(1, -1) + "\n" +
                "  Phase: " + JSON.stringify(data["data"][atomicNum]["phase"], null, 2).slice(1, -1) + "\n" +
                "  Atomic Number: " + JSON.stringify(data["data"][atomicNum]["number"], null, 2) + "\n" +
                "  Period: " + JSON.stringify(data["data"][atomicNum]["period"], null, 2) + "\n" +
                "  Group: " + JSON.stringify(data["data"][atomicNum]["xpos"], null, 2) + "\n" +
                "  Valence Electrons: " + valenceElectrons + "\n" +
                "  Electron Configuration: " + JSON.stringify(data["data"][atomicNum]["electron_configuration"], null, 2).slice(1, -1) + "\n" +
                "  Shells: " + JSON.stringify(data["data"][atomicNum]["period"], null, 2) + "\n" +
                "  Melting Point: " + JSON.stringify(data["data"][atomicNum]["melt"], null, 2) + "\n" +
                "  Boiling Point: " + JSON.stringify(data["data"][atomicNum]["boil"], null, 2) + "\n"
            )

            p.appendChild(text);

            dataResultArea.appendChild(p);
        }
    })
}

function setupInputPage()
{
    if (searchParams.get("search_with") === "protons")
    {
        document.getElementById("input").placeholder = "Any amount of Protons or Atomic Num. (1 to 119)";
    }

    else if (searchParams.get("search_with") === "name")
    {
        document.getElementById("input").placeholder = "Any element name. Ex. Helium";
    }

    else if (searchParams.get("search_with") === "symbol")
    {
        document.getElementById("input").placeholder = "Any element symbol. Ex. He"
    }
}

function gotoUrl()
{
    if (searchParams.get("search_with") === "protons")
    {
        window.location.href = "ESData.html?protons=" + document.getElementById("input").value;
    }

    else if (searchParams.get("search_with") === "name")
    {
        window.location.href = "ESData.html?name=" + document.getElementById("input").value.toUpperCase();
    }

    else if (searchParams.get("search_with") === "symbol")
    {
        window.location.href = "ESData.html?symbol=" + document.getElementById("input").value.toUpperCase();
    }
}