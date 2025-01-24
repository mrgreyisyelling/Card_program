

# Outline of project

The goal of this project is to develop the system necessary to create a localized information network.

The idea is that by creating a 'streamlined' communication system - that allows individuals to 'post' locally and 'remotely', in a manner that is limited and narrowly focused. 

## todos

### Card Flow
- Create blank card
- update card
- delete card
- list all cards in database
- delete all cards in database
- send card to the printers
- mark card for delivery
    - create a set of locations for the card to be delivered to
- associate card with a node
- have card moderated by node manager

### Node flow
- create a node
- update nodes
- delete a node
- list all nodes in database
- delete all nodes in database
- look at all cards associated with a node

### Print and delivery flow
- create a queue for printing and delivery
- create a process to track each step
- create a printer identity
- create a job flow
- create even process to notify delivery
- create delivery identiy 
- create a delivery route

### Board and Moderation flow
- create a board owner
- associate a board with a node
- review cards associated with board
- create documentation of current state of the board
- create list of board items that are not cards

### Card creation flow
- information of the card
- associate card with designer
- associate card with artist
- associate care with QR flow


### QR code flow
- associate card with QR flow
- QR flow pattern
- qr target
- qr rules

### Blockchain

- track distribution of tasks and hand offs using distributed system
- tie the identity of the participants to the final result
- integrate NFTs and provide value towards them
- integrate payment to printer on pickup
- integrate escrow of payment to delivery
- integrate payment to node/board owner


### test printer and delivery
- identify local printers to work with
- identify local delivery persons
- test system locally
- find a setup in denver
- establish a board at ethdenver
- 


# Project Schedule

## Phase 1: Core Infrastructure (1/16–1/23)

### 1/16
- Set up the database models for cards, nodes, boards, printers, and delivery routes.
- Build API endpoints for creating, reading, updating, and deleting cards.
- Test database connections and basic CRUD operations for cards.

### 1/17
- Create the UI for creating and updating cards.
- Add functionality to delete cards and list all cards in the database.
- Implement the "delete all cards" feature and test edge cases.

### 1/18
- Create the database structure and API for nodes.
- Build endpoints for CRUD operations on nodes.
- Test node-card association functionality.

### 1/19
- Develop UI for managing nodes (create, update, delete).
- Implement and test the ability to associate cards with nodes.
- List all cards associated with a specific node.

### 1/20
- Create and test delivery queue database structure.
- Develop endpoints to add cards to the delivery queue.
- Create a UI for managing delivery locations for cards.

### 1/21
- Design the board-owner model and integrate into the database.
- Create endpoints for CRUD operations on boards.
- Implement and test associating boards with nodes.

### 1/22
- Build the basic UI for board management.
- Add functionality to review cards associated with a board.
- Create API to document the state of the board.

### 1/23
- Develop the QR code flow database structure and endpoints.
- Implement QR code generation and associate QR with cards.
- Test QR flow integration.

## Phase 2: Advanced Features (1/24–2/7)

### 1/24
- Add card moderation features for node managers.
- Implement workflow for reviewing and approving/rejecting cards.
- Build UI for moderators to manage cards.

### 1/25
- Build print and delivery queue workflows in the database.
- Add functionality for tracking print jobs and delivery progress.
- Create printer identity and job management endpoints.

### 1/26
- Implement notification system for print and delivery steps.
- Design and integrate the delivery identity structure.
- Create UI for delivery tracking.

### 1/27
- Develop route optimization logic for deliveries.
- Build API endpoints to manage and track delivery routes.
- Test end-to-end print and delivery flow.

### 1/28
- Integrate blockchain for tracking tasks and handoffs.
- Create functionality to tie participant identity to final results.
- Set up blockchain connection and basic transaction flow.

### 1/29
- Implement NFT generation for cards and their associated tasks.
- Build functionality for distributing value to participants via NFTs.
- Test integration of blockchain with existing flows.

### 1/30
- Implement payment workflows for printers (on pickup) using blockchain.
- Set up escrow for delivery payments.
- Test end-to-end payment workflows.

### 1/31
- Integrate payments to node/board owners from blockchain.
- Build dashboard for tracking financial transactions.
- Test financial flows for all stakeholders.

## Phase 3: Finalization and Testing (2/1–2/20)

### 2/1–2/10: Debugging and Refinement
- Debug and test all workflows (CRUD operations, associations, queues).
- Refine UI/UX for all modules (cards, nodes, boards, delivery).
- Optimize API calls and database queries.

### 2/11–2/15: Documentation and Deployment
- Write clear documentation for all features and workflows.
- Prepare deployment scripts and deploy to a testing environment.
- Conduct user testing and collect feedback.

### 2/16–2/20: Final Adjustments
- Address any issues found during user testing.
- Deploy to production.
- Finalize the project and prepare for presentation or launch.


# API Development and Testing Plan

## Step 1: Set Up Routes
- [ ] **Create API Routes for All Resources**:
  - [ ] `Boards`: CRUD routes (`/api/boards`).
  - [ ] `Nodes`: CRUD routes (`/api/nodes`).
  - [ ] `Cards`: Complete any missing routes in `/api/cards`.
  - [ ] Add routes for other resources if needed (`Owners`, `Locations`, `Printers`, etc.).

- [ ] **Integrate Routes into `app.js`**:
  Ensure all routes are added to your `app.js` file:
  ```javascript
  app.use('/api/boards', boardRoutes);
  app.use('/api/nodes', nodeRoutes);
  app.use('/api/cards', cardRoutes);
  ```

- [ ] **Implement Controllers**:
  Write controller logic for each route, ensuring it:
  - Validates input.
  - Handles errors gracefully.
  - Populates related data as needed.

---

## Step 2: Write Basic Tests for Routes
- [ ] **Create Test Data**:
  Write scripts to populate the database with sample data for testing.

- [ ] **Test Routes Locally**:
  Test using **curl** or **Postman** to ensure routes respond as expected.

---

## Step 3: Test Routes with Postman
- [ ] **Set Up Postman**:
  - Install Postman and create a new collection for your project.
  - Add requests for each route in the collection.

- [ ] **Test CRUD Operations**:
  - Test each route with appropriate HTTP methods (`POST`, `GET`, `PUT`, `DELETE`).
  - Ensure validation errors are handled correctly.

- [ ] **Verify Relationships**:
  - Confirm `populate()` functionality works for routes that fetch related data (e.g., `Boards` with `Nodes` and `Cards`).

- [ ] **Handle Edge Cases**:
  - Test invalid input (e.g., missing fields, wrong data types).
  - Test for non-existent resources (e.g., fetching a `Board` by an invalid ID).

---

## Step 4: Automate Testing (Optional)
- [ ] Use a testing framework like **Jest** or **Mocha**.
- [ ] Write tests for:
  - Route responses.
  - Validation errors.
  - Data consistency.

---

## Checklist Overview

1. **Setup Routes**:
   - [ ] Boards.
   - [ ] Nodes.
   - [ ] Cards.
   - [ ] Other resources.

2. **Test Locally**:
   - [ ] Verify each route manually.

3. **Test with Postman**:
   - [ ] Create and organize requests.
   - [ ] Validate CRUD operations.
   - [ ] Handle edge cases.

4. **Automate Tests (Optional)**:
   - [ ] Write and run automated tests.

---

## Next Steps After API Testing
1. Refine error handling and logging.
2. Document the API (e.g., with Swagger or Postman).
3. Prepare for deployment by setting up a production environment.


-----------------
--------------

# on starting of order

https://docs.google.com/drawings/d/1IeTrPqElG169L1M7dl1a1NTkwQBWkBmiDLCwPU0PTJs/edit

Currently - any order received uses this card template to create the card
The file is started:
change the background image
replace the QR code
change the copy and typography
Change the title 

To replace the QR code, use the URL from the website. Go to a QR code generator and create something simple.

So before you can finish the QR and then the card, you need to prototype the website.

You are going to select a template, load the webflow in a new site, publish it, grab the URL
- go the QR code register, select order number - enter URL
- URL is produced - use this to create the QR code
- QR code is produced - use this on the business card.


# Layout of Order


- Sherin 
- order #0001

## steps
- start a new row in the excel spreadsheet
- load website from template
  - publish site
  - get url
  - register url with qr code redirect for order


- Create business card from template
  - https://docs.google.com/drawings/d/1IeTrPqElG169L1M7dl1a1NTkwQBWkBmiDLCwPU0PTJs/edit
- register QR code with order
  - Go to URL
  - select order
  - get URL for QR code
  - go to QR code generator
    - https://www.qrcode-monkey.com/
  - Generate QR code
- Add QR code to business card

- You should a business card template with a functional QR code that points to the staged website.