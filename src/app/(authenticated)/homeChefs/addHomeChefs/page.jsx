'use client'

import { ApiRoutes } from '@src/core'
import { Button, Col, Form, Input, Row, Select, TimePicker, Checkbox } from 'antd'
import moment from 'moment'
import { useMutation } from 'react-query'

import RoundedInput from '@src/components/homechef/roundedInput'

const AddHomeChef = () => {
	const [form] = Form.useForm()

	const initialValues = {
		city: '',
		latitude: '0',
		longitude: '0',
		pincode: '0',
		state: '',
		address: '',
		name: '',
		googleLocation: '',
		description: '',
		homeChefImage: '',
		homeChefStatus: '0',
		cuisine: '',
		foodType: '0',
		maxPrice: '0',
		minPrice: '0',
		openingDay: '',
		maxTime: moment(new Date().toLocaleTimeString(), 'h:mm a'),
		minTime: moment(new Date().toLocaleTimeString(), 'h:mm a'),
		openingTime: moment(new Date().toLocaleTimeString(), 'h:mm a'),
		closingTime: moment(new Date().toLocaleTimeString(), 'h:mm a'),
	}

	const { mutate, isLoading, query } = useMutation(
		async (homeChef) => {
		  const response = await fetch(ApiRoutes.addHomechef, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(homeChef),
		  })
		  const data = await response.json()
		  return data
		},
		{
		  onSuccess: async () => {
			await query.refetch()
		  },
		},
	  )
	  

	const handleCreate = async () => {
		try {
			const values = await form.validateFields()
			mutate(values)
			form.resetFields()
		} catch (err) {
			console.error('Error: ', err)
		}
	}

	return (
		<div className="mx-auto w-full py-2 lg:w-full space-y-4 text-gray-600">
			<Form form={form} initialValues={initialValues} onFinish={handleCreate}>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item name="name" rules={[{ required: true, message: 'Please input chef name' }]}>
							<div>
								<sup>*</sup>Name:
							</div>
							<RoundedInput   className='mb-1' placeholder='Enter Name'/>
						</Form.Item>
					</Col>
					<Col xs={24} sm={12}>
						<Form.Item name="city" rules={[{ required: true, message: 'Please input City' }]}>
							<div>
								<sup>*</sup>City:
							</div>
							<RoundedInput  className='mb-1' placeholder='Enter City'/>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item name="address" rules={[{ required: true, message: 'Please input the address' }]}>
							<div>
								<sup>*</sup>Address:
							</div>
							<RoundedInput  className='mb-1' placeholder='Enter Address'/>
						</Form.Item>
					</Col>
					<Col xs={24} sm={12}>
						<Form.Item name="description">
							<div>Description:</div>
							<RoundedInput  className='mb-1' placeholder='Enter Description'/>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item name="cuisine" rules={[{ required: true, message: 'Please input Cuisine' }]}>
							<div>
								<sup>*</sup>Cuisine:
							</div>
							<RoundedInput  className='mb-1' placeholder='Enter Cuisine'/>
						</Form.Item>
					</Col>
					<Col xs={24} sm={12}>
						<Form.Item name="pincode" rules={[{ required: true, message: 'Please input Pincode' }]}>
							<div>
								<sup>*</sup>Pincode:
							</div>
							<RoundedInput  type="number" className='mb-1' placeholder='Enter Pincode'/>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item name="state" rules={[{ required: true, message: 'Please input State' }]}>
							<div>
								<sup>*</sup>State:
							</div>
							<RoundedInput  className='mb-1' placeholder='Enter State'/>
						</Form.Item>
					</Col>
					<Col xs={24} sm={12}>
						<Form.Item name="foodType" rules={[{ required: true, message: 'Please select Food Type' }]}>
							<div>
								<sup>*</sup>Food Type:
							</div>
							<Select
								defaultValue={initialValues.foodType}
								onChange={(value) => form.setFieldsValue({ foodType: value })}
							>
								<Select.Option value="0">Veg</Select.Option>
								<Select.Option value="1">Non-Veg</Select.Option>
							</Select>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item name="minPrice" rules={[{ required: true, message: 'Please input Min Price' }]}>
							<div>
								<sup>*</sup>Minimum Price:
							</div>
							<RoundedInput  type="number" min={0} className='mb-1' placeholder='Enter Minimum Price'/>
						</Form.Item>
					</Col>
					<Col xs={24} sm={12}>
						<Form.Item name="maxPrice" rules={[{ required: true, message: 'Please input Max Price' }]}>
							<div>
								<sup>*</sup>Maximum Price:
							</div>
							<RoundedInput  type="number" min={0} className='mb-1' placeholder='Enter Maximum Price'/>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item name="openingDay" rules={[{ required: true, message: 'Please select Opening Day' }]}>
						<div>
							<sup>*</sup>Opening Day:
						</div>
						<Checkbox.Group
						value={initialValues.openingDay}
						onChange={(value) => form.setFieldsValue({ openingDay: value })}
						>
							<Checkbox value="Monday">Monday</Checkbox>
							<Checkbox value="Tuesday">Tuesday</Checkbox>
							<Checkbox value="Wednesday">Wednesday</Checkbox>
							<Checkbox value="Thursday">Thursday</Checkbox>
							<Checkbox value="Friday">Friday</Checkbox>
							<Checkbox value="Saturday">Saturday</Checkbox>
							<Checkbox value="Sunday">Sunday</Checkbox>
						</Checkbox.Group>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
				<Col xs={24} sm={12}>
						<Form.Item
							name="openingTime"
							rules={[{ required: true, message: 'Please select Opening Time' }]}
						>
							<div>
								<sup>*</sup>Opening Time:
							</div>
							<TimePicker format="h:mm a" />
						</Form.Item>
					</Col>
					<Col xs={24} sm={12}>
						<Form.Item
							name="closingTime"
							rules={[{ required: true, message: 'Please select Closing Time' }]}
						>
							<div>
								<sup>*</sup>Closing Time:
							</div>
							<TimePicker format="h:mm a" />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
				<Col xs={24} sm={12}>
						<Form.Item
							name="maxTime"
							rules={[{ required: true, message: 'Please select Maximum Time' }]}
						>
							<div>
								<sup>*</sup>Maximum Preparation Time:
							</div>
							<TimePicker format="h:mm a" />
						</Form.Item>
					</Col>
					<Col xs={24} sm={12}>
						<Form.Item
							name="minTime"
							rules={[{ required: true, message: 'Please select Minimum Time' }]}
						>
							<div>
								<sup>*</sup>Minimum Food Preparation Time:
							</div>
							<TimePicker format="h:mm a" />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item
							name="latitude"
							rules={[{ required: true, message: 'Please input the latitude' }]}
						>
							<div>
								<sup>*</sup>Latitude:
							</div>
							<RoundedInput  type='number' className='mb-1' placeholder='Enter Latitude'/>
						</Form.Item>
					</Col>
					<Col xs={24} sm={12}>
						<Form.Item
							name="longitude"
							rules={[{ required: true, message: 'Please input the longitude' }]}
						>
							<div>
								<sup>*</sup>Longitude:
							</div>
							<RoundedInput  type='number' className='mb-1' placeholder='Enter Longitude'/>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item
							name="homeChefImage"
							rules={[{ required: true, type: 'url', message: 'Please input the image URL' }]}
						>
							<div>
								<sup>*</sup>Image URL:
							</div>
							<RoundedInput  className='mb-1' placeholder='Enter Image URL'/>
						</Form.Item>
					</Col>
					<Col xs={24} sm={12}>
  					<Form.Item
    					name="googleLocation"
   				 		rules={[
     					 { required: true, message: 'Please input the Google Location URL' },
     					{ pattern: /^https?:\/\/(www\.)?google\.com\/maps\/.*$/,
       					 message: 'Please enter a valid Google Maps URL',
      					},]}>
   						<div>
      						<sup>*</sup>Google Location:
    					</div>
    					<RoundedInput  className='mb-1' placeholder='Enter Google Location'/>
 					</Form.Item>
					</Col>
				</Row>
				<div className="mt-8 flex justify-center">
					<Button className="bg-white text-black" htmlType="submit" disabled={isLoading}>
						Submit
					</Button>
				</div>
			</Form>
		</div>
	)
}

export default AddHomeChef
