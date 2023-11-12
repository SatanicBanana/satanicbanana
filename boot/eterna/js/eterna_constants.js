const debug_16x16 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAB4SURBVDhPrZJRDsAgCEN197+zk4UmxQjlY+8HldKUZeNPllfDznxPebwyGJxeS24GRmvYyAywglyjSsAp2CiYqgTM7S1QNjcwULpUgHdpwk2Iy4ETiFuD2UcE1f/wmSsDpOAkOJv56iQ4U4S7MrjBafSOxKnd/TFfzwQk+in1DugAAAAOZVhJZk1NACoAAAAIAAAAAAAAANJTkwAAAABJRU5ErkJggg=="
const debug_32x32 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADqSURBVFhH5ZTBDoMwDEPL/v+ftwW1khslqUkzduBdCtSJ3YBoj+foq+bdV8TTbmE1Hea4Zz1DbglsmQz0XqSdePV1l/RpqwKkYQPQI/1yRUuNzmoY1Ym+/ANExMA7ZbSXIjLSpMxXoxRQgwbecw/TiwmgiWqegUxmTAevWaaa7DjRNNNj1B8Vf8LpRAFm6J0JYK3Z3OGK9mdICAxyC9rwvP/HCKZXUBnAGqnVf+jOvVUAqymC9aKN7ssRAy9gtFdKFICCHVHU0Ooheqp31Z8QoU9fxVaA3QkwZqJxdcx7WpnoHp6e/d4eRWsfB1g/9HG04J0AAAAOZVhJZk1NACoAAAAIAAAAAAAAANJTkwAAAABJRU5ErkJggg=="
const debug_64x64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPSSURBVHhe7Zk7rA1RFIaP9/tNgQSJR0IniIhCRIkoaBR0ohC1KFApJDqNRKMlUSgpJErx6JDQeJMQ4v1+/N85Z91sOzP37D13Zs6cO/MnX+Zx9p2919prrb1nbqtRo0aNGmXT3y61VWN8gCrvpLHdY21VtgMqFxFZHIARYzqng69+pECloiDWATGDT2pbucjJEgExRlQ+VfqRApVS44DuMUSW0xzLKGRl9BGVowyI9v7A0p5h7X2590OMjBljtGIenmSQGZBmaIgKNTBPDWcQv4UaHNquUgoZdKgTKuWAPFeBgQllV4O0DIZGWJSyLINlyO/LrnOPspgHMojh2ocOMradKXfjUWwKMCh/YK5CBhlqiNuuEONRjAMYhA3EHOFS2CAzaK6Y0DkdXJljkXveS/PEPXFd7BCTxEDKNzjUCbPFW/FHfBdPxRkxXgyUQmfcF6l4TJgDOMIBURuR/88Fhj8TOPOVWCz+07jucbQJwz+J7WKK+CVmCorjZVELUQuIAox/2T1+EGtEqcqayzEi5BcIfyk+LqwG/O5yQZQS+aFVe6RaIcjvH+KcmCZM88UTwexTED+LF2KpKFRlGT9R3BDWHzN9SbgzfFDgAGYfB8AWUZjKMh7NEsy+hTmQ79w3cU4tYEw4gkg5Ktoq6nW4rG0xlf5R53SoT3aBXzunbb0Xp4RNCu3Wd07zV8zs5xUlq8Rt8VqcFWyFfS0UzLxFyRVRiGKMyssBiFowWaRFHkviY0EdoF/qRlt5pgAPHmnoZ3UKs/tNpP09s066fGlftVpzusfCakDV9FHwUmT2UhjbkzUaHMC6v03sFRsEqeCLyLgjLEJxANviXBUbvkntY5+BQScF4W9pcFFQE3wdFiyDpAPtlolc5Q6+lyH8nuYAnzRNFecFhrvtMXCP8HVaUAR/CpbJ3HeDNlh3MHbPl3s/pH2SFgk2PRhkyxtg5DXhpjdfhe4LfgNqwgxRSA0gLA2UZpRrsNs+VFT0N4IvPW6fOAG5X4CmiyWC/rD5gcAJuSrE0F4KbWfiRQhHWB9AfvspsE/gGF6IaHNE5C4bQJLS7vsKbedqs2CvTyrwprdTuJFNQXwoeDb1gnYbRSHqhwMQ+cxuj68/vg4Jy30igA+my0VhwgjXEP96OGV1QJr4BsgO0IojR74ZFP5BxDU6b6NCxTJ5VdA/dQHj74qhbXDRMif0wwGsBieEzTrwIWS1qIXWCT/094va6JYg8qj4HG+KxD3PaP2/AC9EmwR1gEjYKt6J2mit4MWH4rebG3UTe/9dYmX7qlGjRo0aNUpQq/UPRKAZQL2nc3IAAAAOZVhJZk1NACoAAAAIAAAAAAAAANJTkwAAAABJRU5ErkJggg=="

const debug_foldericon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAK1JREFUWIVjYBgFo2CAASM2wfs2H/7j0qB4RACrHqo54L7Nh/8KC9/j1PAgXpDqjkCx/P/d+//v23z4/3/7Pbw0teyE+wTm8wfxggwK1e8YHrQKEaTJBcghyIhsOb0Ao+ZGBoZfBYwMDAwMLCgyt6gWsnjBfbMEBsVTDP8ZfhUwMtHFRjxg1AGjDhh1wKgDRh0w6oBRB6C0Byhp5ZALUJpkiqcW0M9maItoFIwCAOicWojSI6ORAAAAAElFTkSuQmCC"
const debug_fileicon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAT1JREFUWIXtlzFLw1AUhb8nIUi3Cg46FQSh4CSkU4aCP6A/oXRw6KSgP8HRIU4VRDo6dxAcMzlYEJ0CQkmGmjlSKJLluoTQQlOTEhorOcs7vMflHs693MdVzMA1A+yDDzoPzwJw3WyoS/tlKT8zGupmmI6fmkfKf9d4nLxBeA6ANpu8YoQ0h4cizi5euwpT5MLZS+S3JzvwiUh6LneTPsfbNfWKFYuIBbhmIDJyBd0SGbm58l7tS9Ct+ES3ANiiYCwUIE4rd55JwDpRuAAt6UHVBwvvl9mq6gPEac3F/laGRAFp6pcUkyU2VwdWQa4OrILCm7BwAWUPbF4JsmKtg2gVlA6UDpQObN4g+nd/QenA32rCihEqr12Vp7HKPVHX79Pb79D1o+X02wNgLpNrBtyPPa58W3JXECFOHm3GP4UJCtLYGUiiAAAAAElFTkSuQmCC"

const eterna_icon = "data:image/png;base64,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"
const shortcut_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA6SURBVChTY/wPBAx4AFgBIyMjlIsKQHqZoGwMADMYqwJkW7EqQLYSRQGyTpgiuAKYJLIiECDgTQYGAGKTHfkgbk36AAAAAElFTkSuQmCC"