import { Button, Col, Form, Row, Select, TimePicker } from 'antd'
import { useMutation } from 'react-query'

import { RoundedInput } from '../shared'

const EditHomeChef = () => {
	const [form] = Form.useForm()

	const handleUpdate = async () => {
		const values = await form.validateFields()
		mutate(values)
	}

	const initialValues = {
		name: '',
		city: '',
		address: '',
		description: '',
		cuisine: '',
		pincode: '',
		state: '',
		foodType: '0',
		minPrice: 0,
		maxPrice: 0,
		openingDay: [],
		openingTime: null,
		closingTime: null,
		maxTime: null,
		minTime: null,
		latitude: '',
		longitude: '',
		homeChefImage: '',
		googleLocation: '',
	}
	const { mutate, isLoading, query } = useMutation(
		async (homeChef) => {
			const response = await fetch('/api/homechefs/editHomechefs', {
				method: 'PUT',
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
			onError: (error) => {
				console.dir(error, 'edit homechef mutation')
			},
		},
	)

	return (
		<div className="w-full space-y-1 rounded bg-cover bg-center py-2 text-gray-600">
			<Form
				form={form}
				initialValues={initialValues}
				onFinish={handleUpdate}
				className="rounded-lg bg-white p-6 shadow-md"
			>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item name="name" rules={[{ required: true, message: 'Please input chef name' }]}>
							<RoundedInput
								name="name"
								placeholder="Enter Name"
								label={
									<span>
										<sup>*</sup>Name:
									</span>
								}
							/>
						</Form.Item>
						{form.getFieldError('name') && <div style={{ color: 'red' }}>{form.getFieldError('name')}</div>}
					</Col>
					<Col xs={24} sm={12}>
						<Form.Item name="city" rules={[{ required: true, message: 'Please input City' }]}>
							<RoundedInput
								name="city"
								className="mb-1"
								placeholder="Enter City"
								label={
									<span>
										<sup>*</sup>City:
									</span>
								}
							/>
						</Form.Item>
						{form.getFieldError('city') && <div style={{ color: 'red' }}>{form.getFieldError('city')}</div>}
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item name="address" rules={[{ required: true, message: 'Please input the address' }]}>
							<RoundedInput
								name="address"
								className="mb-1"
								placeholder="Enter Address"
								label={
									<span>
										<sup>*</sup>Address:
									</span>
								}
							/>
						</Form.Item>
						{form.getFieldError('address') && (
							<div style={{ color: 'red' }}>{form.getFieldError('address')}</div>
						)}
					</Col>
					<Col xs={24} sm={12}>
						<Form.Item name="description">
							<RoundedInput
								name="description"
								className="mb-1"
								placeholder="Enter Description"
								label="Description"
							/>
						</Form.Item>
						{form.getFieldError('description') && (
							<div style={{ color: 'red' }}>{form.getFieldError('description')}</div>
						)}
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item name="cuisine" rules={[{ required: true, message: 'Please input Cuisine' }]}>
							<RoundedInput
								name="cuisine"
								className="mb-1"
								placeholder="Enter Cuisine"
								label={
									<span>
										<sup>*</sup>Cuisine:
									</span>
								}
							/>
						</Form.Item>
						{form.getFieldError('cuisine') && (
							<div style={{ color: 'red' }}>{form.getFieldError('cuisine')}</div>
						)}
					</Col>
					<Col xs={24} sm={12}>
						<Form.Item name="pincode" rules={[{ required: true, message: 'Please input Pincode' }]}>
							<RoundedInput
								name="pincode"
								className="mb-1"
								placeholder="Enter Pincode"
								label={
									<span>
										<sup>*</sup>Pincode:
									</span>
								}
							/>
						</Form.Item>
						{form.getFieldError('pincode') && (
							<div style={{ color: 'red' }}>{form.getFieldError('pincode')}</div>
						)}
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item name="state" rules={[{ required: true, message: 'Please input State' }]}>
							<RoundedInput
								name="state"
								className="mb-1"
								placeholder="Enter State"
								label={
									<span>
										<sup>*</sup>State:
									</span>
								}
							/>
						</Form.Item>
						{form.getFieldError('state') && (
							<div style={{ color: 'red' }}>{form.getFieldError('state')}</div>
						)}
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
						{form.getFieldError('foodType') && (
							<div style={{ color: 'red' }}>{form.getFieldError('foodType')}</div>
						)}
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item name="minPrice" rules={[{ required: true, message: 'Please input Min Price' }]}>
							<RoundedInput
								name="minPrice"
								min={0}
								className="mb-1"
								placeholder="Enter Minimum Price"
								label={
									<span>
										<sup>*</sup>Minimum Price:
									</span>
								}
							/>
						</Form.Item>
						{form.getFieldError('minPrice') && (
							<div style={{ color: 'red' }}>{form.getFieldError('minPrice')}</div>
						)}
					</Col>
					<Col xs={24} sm={12}>
						<Form.Item name="maxPrice" rules={[{ required: true, message: 'Please input Max Price' }]}>
							<RoundedInput
								name="maxPrice"
								min={0}
								className="mb-1"
								placeholder="Enter Maximum Price"
								label={
									<span>
										<sup>*</sup>Maximum Price:
									</span>
								}
							/>
						</Form.Item>
						{form.getFieldError('maxPrice') && (
							<div style={{ color: 'red' }}>{form.getFieldError('maxPrice')}</div>
						)}
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item name="openingDay" rules={[{ required: true, message: 'Please select Opening Day' }]}>
							<div>
								<sup>*</sup>Opening Day:
							</div>
							<Select
								mode="multiple"
								placeholder="Select Opening Day"
								onChange={(value) => form.setFieldsValue({ openingDay: value })}
							>
								<Select.Option value="Monday">Monday</Select.Option>
								<Select.Option value="Tuesday">Tuesday</Select.Option>
								<Select.Option value="Wednesday">Wednesday</Select.Option>
								<Select.Option value="Thursday">Thursday</Select.Option>
								<Select.Option value="Friday">Friday</Select.Option>
								<Select.Option value="Saturday">Saturday</Select.Option>
								<Select.Option value="Sunday">Sunday</Select.Option>
							</Select>
						</Form.Item>
						{form.getFieldError('openingDay') && (
							<div style={{ color: 'red' }}>{form.getFieldError('openingDay')}</div>
						)}
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
						<Form.Item name="maxTime" rules={[{ required: true, message: 'Please select Maximum Time' }]}>
							<div>
								<sup>*</sup>Maximum Preparation Time:
							</div>
							<TimePicker format="h:mm a" />
						</Form.Item>
					</Col>
					<Col xs={24} sm={12}>
						<Form.Item name="minTime" rules={[{ required: true, message: 'Please select Minimum Time' }]}>
							<div>
								<sup>*</sup>Minimum Food Preparation Time:
							</div>
							<TimePicker format="h:mm a" />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item name="latitude" rules={[{ required: true, message: 'Please input the latitude' }]}>
							<RoundedInput
								name="latitude"
								type="number"
								className="mb-1"
								placeholder="Enter Latitude"
								label={
									<span>
										<sup>*</sup>Latitude:
									</span>
								}
							/>
						</Form.Item>
						{form.getFieldError('latitude') && (
							<div style={{ color: 'red' }}>{form.getFieldError('latitude')}</div>
						)}
					</Col>
					<Col xs={24} sm={12}>
						<Form.Item name="longitude" rules={[{ required: true, message: 'Please input the longitude' }]}>
							<RoundedInput
								name="longitude"
								type="number"
								className="mb-1"
								placeholder="Enter Longitude"
								label={
									<span>
										<sup>*</sup>Longitude:
									</span>
								}
							/>
						</Form.Item>
						{form.getFieldError('longitude') && (
							<div style={{ color: 'red' }}>{form.getFieldError('longitude')}</div>
						)}
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12}>
						<Form.Item
							name="homeChefImage"
							rules={[{ required: true, type: 'url', message: 'Please input the image URL' }]}
						>
							<RoundedInput
								name="homeChefImage"
								className="mb-1"
								placeholder="Enter Image URL"
								label={
									<span>
										<sup>*</sup>Image URL:
									</span>
								}
							/>
						</Form.Item>
						{form.getFieldError('homeChefImage') && (
							<div style={{ color: 'red' }}>{form.getFieldError('homeChefImage')}</div>
						)}
					</Col>
					<Col xs={24} sm={12}>
						<Form.Item
							name="googleLocation"
							rules={[
								{ required: true, message: 'Please input the Google Location URL' },
								{
									pattern: /^https?:\/\/(www\.)?google\.com\/maps\/.*$/,
									message: 'Please enter a valid Google Maps URL',
								},
							]}
						>
							<RoundedInput
								name="googleLocation"
								className="mb-1"
								placeholder="Enter Google Location"
								label={
									<span>
										<sup>*</sup>Google Location:
									</span>
								}
							/>
						</Form.Item>
						{form.getFieldError('googleLocation') && (
							<div style={{ color: 'red' }}>{form.getFieldError('googleLocation')}</div>
						)}
					</Col>
				</Row>
				<div className="mt-8 flex justify-center">
					<Button className="bg-white text-black" htmlType="submit" disabled={isLoading}>
						Update
					</Button>
				</div>
			</Form>
		</div>
	)
}

export default EditHomeChef
