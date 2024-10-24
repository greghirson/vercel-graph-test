
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-23 19:10:00", "b": 591.4}, {"a": "2024-10-23 19:15:00", "b": 607.6}, {"a": "2024-10-23 19:20:00", "b": 594.8}, {"a": "2024-10-23 19:25:00", "b": 588.8}, {"a": "2024-10-23 19:30:00", "b": 572.2}, {"a": "2024-10-23 19:35:00", "b": 571.5}, {"a": "2024-10-23 19:40:00", "b": 582.25}, {"a": "2024-10-23 19:45:00", "b": 598.2}, {"a": "2024-10-23 19:50:00", "b": 587.0}, {"a": "2024-10-23 19:55:00", "b": 573.4}, {"a": "2024-10-23 20:00:00", "b": 581.2}, {"a": "2024-10-23 20:05:00", "b": 600.2}, {"a": "2024-10-23 20:10:00", "b": 609.0}, {"a": "2024-10-23 20:15:00", "b": 632.8}, {"a": "2024-10-23 20:20:00", "b": 650.2}, {"a": "2024-10-23 20:25:00", "b": 633.0}, {"a": "2024-10-23 20:30:00", "b": 630.4}, {"a": "2024-10-23 20:35:00", "b": 645.6}, {"a": "2024-10-23 20:40:00", "b": 648.75}, {"a": "2024-10-23 20:45:00", "b": 610.2}, {"a": "2024-10-23 20:50:00", "b": 560.0}, {"a": "2024-10-23 20:55:00", "b": 550.8}, {"a": "2024-10-23 21:00:00", "b": 540.4}, {"a": "2024-10-23 21:05:00", "b": 563.8}, {"a": "2024-10-23 21:10:00", "b": 647.6}, {"a": "2024-10-23 21:15:00", "b": 729.6}, {"a": "2024-10-23 21:20:00", "b": 825.2}, {"a": "2024-10-23 21:25:00", "b": 730.8}, {"a": "2024-10-23 21:30:00", "b": 710.25}, {"a": "2024-10-23 21:35:00", "b": 737.4}, {"a": "2024-10-23 21:40:00", "b": 745.2}, {"a": "2024-10-23 21:45:00", "b": 683.4}, {"a": "2024-10-23 21:50:00", "b": 699.0}, {"a": "2024-10-23 21:55:00", "b": 731.2}, {"a": "2024-10-23 22:00:00", "b": 710.6}, {"a": "2024-10-23 22:05:00", "b": 711.4}, {"a": "2024-10-23 22:10:00", "b": 693.2}, {"a": "2024-10-23 22:15:00", "b": 711.8}, {"a": "2024-10-23 22:20:00", "b": 742.4}, {"a": "2024-10-23 22:25:00", "b": 665.6}, {"a": "2024-10-23 22:30:00", "b": 708.6}, {"a": "2024-10-23 22:35:00", "b": 676.0}, {"a": "2024-10-23 22:40:00", "b": 653.25}, {"a": "2024-10-23 22:45:00", "b": 667.25}, {"a": "2024-10-23 22:50:00", "b": 714.2}, {"a": "2024-10-23 22:55:00", "b": 674.6}, {"a": "2024-10-23 23:00:00", "b": 671.0}, {"a": "2024-10-23 23:05:00", "b": 689.4}, {"a": "2024-10-23 23:10:00", "b": 725.6}, {"a": "2024-10-23 23:15:00", "b": 639.25}, {"a": "2024-10-23 23:20:00", "b": 688.2}, {"a": "2024-10-23 23:25:00", "b": 719.2}, {"a": "2024-10-23 23:30:00", "b": 676.25}, {"a": "2024-10-23 23:35:00", "b": 636.0}, {"a": "2024-10-23 23:40:00", "b": 621.8}, {"a": "2024-10-23 23:45:00", "b": 683.8}, {"a": "2024-10-23 23:50:00", "b": 611.4}, {"a": "2024-10-23 23:55:00", "b": 602.8}, {"a": "2024-10-24 00:00:00", "b": 618.6}, {"a": "2024-10-24 00:05:00", "b": 628.6}, {"a": "2024-10-24 00:10:00", "b": 604.75}, {"a": "2024-10-24 00:15:00", "b": 606.8}, {"a": "2024-10-24 00:20:00", "b": 619.4}, {"a": "2024-10-24 00:25:00", "b": 587.8}, {"a": "2024-10-24 00:30:00", "b": 557.8}, {"a": "2024-10-24 00:35:00", "b": 554.75}, {"a": "2024-10-24 00:40:00", "b": 573.0}, {"a": "2024-10-24 00:45:00", "b": 567.0}, {"a": "2024-10-24 00:50:00", "b": 561.6}, {"a": "2024-10-24 00:55:00", "b": 582.6}, {"a": "2024-10-24 01:00:00", "b": 599.2}, {"a": "2024-10-24 01:05:00", "b": 572.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    