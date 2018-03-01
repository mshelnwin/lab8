var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(req, res){
  res.render('rsvp', data);
};

exports.addRSVP = function(req, res){
	var rsvpEmail = req.body.rsvpEmail;

	//Prints in terminal when POST is made
	console.log(rsvpEmail); 

	data.rsvp.push(rsvpEmail); //Add to current data

	//Send task name back so browser knows it worked out
	res.send(rsvpEmail);
}