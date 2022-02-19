examplesite: static layouts images
	cp exampleSite/config.yml config.yml
	rm -rf exampleSite/themes/journal
	mkdir -p exampleSite/themes/journal
	cp archetypes exampleSite/themes/journal -r
	cp images exampleSite/themes/journal -r
	cp layouts exampleSite/themes/journal -r
	cp static exampleSite/themes/journal -r
	cp theme.toml exampleSite/themes/journal
	cp config.yml exampleSite/config.yml
	cd exampleSite && hugo