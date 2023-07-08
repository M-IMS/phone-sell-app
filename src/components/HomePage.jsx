import React from "react";
import {
  Radio,
  Typography,
  Input,
  Checkbox,
  Select,
  Option,
} from "@material-tailwind/react";

const HomePage = () => {
  return (
    <div className="md:m-8 w-[60%]">
      {/* Phone Base Configuration */}
      <div className="shadow-md p-4 mb-8">
        <h1 className="text-3xl mb-8">Base Configuration</h1>

        <div className="md:grid grid-cols-2 gap-8">
          <div className="w-72">
            <Select label="Select Model">
              <Option>iPhone 14</Option>
              <Option>iPhone 14 plus</Option>
              <Option>iPhone 14 pro</Option>
              <Option>iPhone 14 pro max</Option>
              <Option>iPhone SE (3rd Gen)</Option>
            </Select>
          </div>
          <div className="mb-8">
            <h1 className="text-xl font-semibold">
              2. Tell us about your device ownership.
            </h1>
            <p className="text-sm">Please select from the options below.</p>
            <div className="flex flex-col text-lg pt-2">
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Brand New
                  </Typography>
                }
              />
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Pre-Owned
                  </Typography>
                }
              />
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Refurbish
                  </Typography>
                }
              />
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-xl font-semibold">
              3. Your device ROM capacity?*
            </h1>
            <p className="text-sm">Please select from the options below.</p>
            <div className="text-lg pt-2 grid grid-cols-3">
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    16GB
                  </Typography>
                }
              />
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    32GB
                  </Typography>
                }
              />
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    64GB
                  </Typography>
                }
              />
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    128GB
                  </Typography>
                }
              />
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    265GB
                  </Typography>
                }
              />
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    512GB
                  </Typography>
                }
              />
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    1TB
                  </Typography>
                }
              />
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-xl font-semibold">
              4. What is the color of your device?*
            </h1>
            <p className="text-sm">Please select from the options below.</p>
            <div className="grid grid-cols-2 text-lg pt-2">
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Black
                  </Typography>
                }
              />
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    White
                  </Typography>
                }
              />
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Purple
                  </Typography>
                }
              />
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Green
                  </Typography>
                }
              />
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Red
                  </Typography>
                }
              />
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Blue
                  </Typography>
                }
              />
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-xl font-semibold">
              5. SIM variation of your device?*
            </h1>
            <p className="text-sm">Please select from the options below.</p>
            <div className="grid grid-cols-2 text-lg pt-2">
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Single SIM
                  </Typography>
                }
              />
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Dual SIM
                  </Typography>
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* General Evaluation */}
      <div className="shadow-md p-4 ">
        <h1 className="text-3xl mb-8">General Evaluation</h1>

        <div className="md:grid grid-cols-2 gap-8">
          <div className="mb-8">
            <h1 className="text-xl font-semibold">
              1. Tell us what you don't have with your phone.
            </h1>
            <p className="text-sm">
              Please select only what you don’t have from following.
            </p>
            <div className="flex flex-col text-lg pt-2">
              <Checkbox
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Authentic Charger is unavailable
                  </Typography>
                }
              />
              <Checkbox
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Valid Bill with same IMEI is unavailable
                  </Typography>
                }
              />
              <Checkbox
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Box with same IMEI is unavailable
                  </Typography>
                }
              />
              <Checkbox
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Authentic Earphones is unavailable
                  </Typography>
                }
              />
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-xl font-semibold">
              2. Is your product under official warranty?*
            </h1>
            <p className="text-sm">Please select from the options below.</p>
            <div className="flex flex-col text-lg pt-2">
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    More than 10 months
                  </Typography>
                }
              />
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    More than 4 months
                  </Typography>
                }
              />
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Less than 4 months
                  </Typography>
                }
              />
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    No
                  </Typography>
                }
              />
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-xl font-semibold">
              3. What is the battery health percentage of your device?*
            </h1>
            <p className="text-sm">Please select from the options below.</p>
            <div className="flex flex-col justify-between text-lg pt-2">
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    100%
                  </Typography>
                }
              />
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    95 - 99%
                  </Typography>
                }
              />
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    90 - 94%
                  </Typography>
                }
              />
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    85 - 89%
                  </Typography>
                }
              />
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    80 - 84%
                  </Typography>
                }
              />
              <Radio
                name="type"
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Below 80%
                  </Typography>
                }
              />
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-xl font-semibold">
              4. Kindly upload 4 photos of your device.*
            </h1>
            <p className="text-sm">Please select from the options below.</p>
            <div className="pt-8 w-52">
              <Input type="file" label="Upload File" />
            </div>
          </div>
        </div>
      </div>

      {/* Screen & Body Condition */}
      <div className="shadow-md p-4 my-8">
        <h1 className="text-3xl mb-8">Screen & Body Condition</h1>
        <div className="md:grid grid-cols-2 gap-8">
          <div className="mb-8">
            <h1 className="text-xl font-semibold">
              1. How's your phone screen's physical condition?*
            </h1>
            <p className="text-sm">
              Please select your device's screen conditions (you can select
              multiple options if necessary)
            </p>
            <div className="flex flex-col text-lg pt-2">
              <Checkbox
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Dead pixel/White dead pixel
                  </Typography>
                }
              />
              <Checkbox
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Burn in Shadow/Discoloration
                  </Typography>
                }
              />
              <Checkbox
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Screen cracked/ Touch issue
                  </Typography>
                }
              />
              <Checkbox
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Major scratches
                  </Typography>
                }
              />
              <Checkbox
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Minor scratches
                  </Typography>
                }
              />
              <Checkbox
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Flawless Screen
                  </Typography>
                }
              />
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-xl font-semibold">
              2. How’s your phone’s physical condition?*
            </h1>
            <p className="text-sm">
              Please select your device's Body conditions (you can select
              multiple options if necessary)
            </p>
            <div className="flex flex-col text-lg pt-2">
              <Checkbox
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Bent body/Cracked side or back panel
                  </Typography>
                }
              />
              <Checkbox
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Loose screen/side or back panel
                  </Typography>
                }
              />
              <Checkbox
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Camera glass broken/ has dust
                  </Typography>
                }
              />
              <Checkbox
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Major Scratch/Dent
                  </Typography>
                }
              />
              <Checkbox
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Minor Scratch/Dent
                  </Typography>
                }
              />
              <Checkbox
                label={
                  <Typography color="blue-gray" className="font-medium">
                    Flawless Body
                  </Typography>
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Functional Condition */}
      <div className="shadow-md p-4 my-8">
        <h1 className="text-3xl mb-8">Functional Condition</h1>

        <div className="mb-8">
          <h1 className="text-xl font-semibold">
            1. Tell us if you have any problems mentioned below.*
          </h1>
          <p className="text-sm">
            Please select the problems only that your phone has from the
            following (you can select multiple options if necessary))
          </p>
          <div className="flex flex-col text-lg pt-2">
            <Checkbox
              label={
                <Typography color="blue-gray" className="font-medium">
                  Front Camera
                </Typography>
              }
            />
            <Checkbox
              label={
                <Typography color="blue-gray" className="font-medium">
                  Back Camera
                </Typography>
              }
            />
            <Checkbox
              label={
                <Typography color="blue-gray" className="font-medium">
                  WiFi/Bluetooth/NFC
                </Typography>
              }
            />
            <Checkbox
              label={
                <Typography color="blue-gray" className="font-medium">
                  Network Issue
                </Typography>
              }
            />
            <Checkbox
              label={
                <Typography color="blue-gray" className="font-medium">
                  Battery Flawed
                </Typography>
              }
            />
            <Checkbox
              label={
                <Typography color="blue-gray" className="font-medium">
                  Speaker/Ear/Mouth piece
                </Typography>
              }
            />
            <Checkbox
              label={
                <Typography color="blue-gray" className="font-medium">
                  Button (Power/Volume/Silent)
                </Typography>
              }
            />
            <Checkbox
              label={
                <Typography color="blue-gray" className="font-medium">
                  Charging/Headphone port
                </Typography>
              }
            />
            <Checkbox
              label={
                <Typography color="blue-gray" className="font-medium">
                  Fingerprint Scanner
                </Typography>
              }
            />
            <Checkbox
              label={
                <Typography color="blue-gray" className="font-medium">
                  Gyroscope/Proximity sensor
                </Typography>
              }
            />
            <Checkbox
              label={
                <Typography color="blue-gray" className="font-medium">
                  Vibration
                </Typography>
              }
            />
            <Checkbox
              label={
                <Typography color="blue-gray" className="font-medium">
                  FaceID
                </Typography>
              }
            />
            <Checkbox
              label={
                <Typography color="blue-gray" className="font-medium">
                  Phone Restarts Repeatedly
                </Typography>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
