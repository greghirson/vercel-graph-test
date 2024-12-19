
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-18 16:00:00", "b": 479.8}, {"a": "2024-12-18 16:05:00", "b": 484.0}, {"a": "2024-12-18 16:10:00", "b": 467.2}, {"a": "2024-12-18 16:15:00", "b": 449.8}, {"a": "2024-12-18 16:20:00", "b": 458.6666666666667}, {"a": "2024-12-18 16:25:00", "b": 458.0}, {"a": "2024-12-18 16:30:00", "b": 465.3333333333333}, {"a": "2024-12-18 16:35:00", "b": 469.25}, {"a": "2024-12-18 16:40:00", "b": 454.6}, {"a": "2024-12-18 16:45:00", "b": 442.25}, {"a": "2024-12-18 16:50:00", "b": 474.4}, {"a": "2024-12-18 16:55:00", "b": 477.8}, {"a": "2024-12-18 17:00:00", "b": 441.0}, {"a": "2024-12-18 17:05:00", "b": 447.4}, {"a": "2024-12-18 17:10:00", "b": 461.2}, {"a": "2024-12-18 17:15:00", "b": 456.2}, {"a": "2024-12-18 17:20:00", "b": 442.25}, {"a": "2024-12-18 17:25:00", "b": 445.0}, {"a": "2024-12-18 17:30:00", "b": 462.25}, {"a": "2024-12-18 17:35:00", "b": 472.4}, {"a": "2024-12-18 17:40:00", "b": 493.0}, {"a": "2024-12-18 17:45:00", "b": 510.6}, {"a": "2024-12-18 17:50:00", "b": 518.2}, {"a": "2024-12-18 17:55:00", "b": 507.75}, {"a": "2024-12-18 18:00:00", "b": 525.0}, {"a": "2024-12-18 18:05:00", "b": 541.0}, {"a": "2024-12-18 18:10:00", "b": 553.2}, {"a": "2024-12-18 18:15:00", "b": 572.4}, {"a": "2024-12-18 18:20:00", "b": 607.0}, {"a": "2024-12-18 18:25:00", "b": 624.75}, {"a": "2024-12-18 18:30:00", "b": 620.6666666666666}, {"a": "2024-12-18 18:35:00", "b": 629.8}, {"a": "2024-12-18 18:40:00", "b": 642.4}, {"a": "2024-12-18 18:45:00", "b": 662.0}, {"a": "2024-12-18 18:50:00", "b": 671.75}, {"a": "2024-12-18 18:55:00", "b": 663.5}, {"a": "2024-12-18 19:00:00", "b": 645.75}, {"a": "2024-12-18 19:05:00", "b": 648.0}, {"a": "2024-12-18 19:10:00", "b": 676.0}, {"a": "2024-12-18 19:15:00", "b": 682.6}, {"a": "2024-12-18 19:20:00", "b": 699.75}, {"a": "2024-12-18 19:25:00", "b": 716.75}, {"a": "2024-12-18 19:30:00", "b": 713.4}, {"a": "2024-12-18 19:35:00", "b": 710.3333333333334}, {"a": "2024-12-18 19:40:00", "b": 711.2}, {"a": "2024-12-18 19:45:00", "b": 732.3333333333334}, {"a": "2024-12-18 19:50:00", "b": 755.4}, {"a": "2024-12-18 19:55:00", "b": 768.4}, {"a": "2024-12-18 20:00:00", "b": 836.8}, {"a": "2024-12-18 20:05:00", "b": 816.6}, {"a": "2024-12-18 20:10:00", "b": 779.8}, {"a": "2024-12-18 20:15:00", "b": 793.2}, {"a": "2024-12-18 20:20:00", "b": 805.4}, {"a": "2024-12-18 20:25:00", "b": 827.8}, {"a": "2024-12-18 20:30:00", "b": 820.4}, {"a": "2024-12-18 20:35:00", "b": 810.4}, {"a": "2024-12-18 20:40:00", "b": 809.25}, {"a": "2024-12-18 20:45:00", "b": 806.75}, {"a": "2024-12-18 20:50:00", "b": 815.6}, {"a": "2024-12-18 20:55:00", "b": 809.0}, {"a": "2024-12-18 21:00:00", "b": 804.0}, {"a": "2024-12-18 21:05:00", "b": 810.25}, {"a": "2024-12-18 21:10:00", "b": 792.2}, {"a": "2024-12-18 21:15:00", "b": 786.4}, {"a": "2024-12-18 21:20:00", "b": 779.75}, {"a": "2024-12-18 21:25:00", "b": 780.4}, {"a": "2024-12-18 21:30:00", "b": 781.0}, {"a": "2024-12-18 21:35:00", "b": 780.8}, {"a": "2024-12-18 21:40:00", "b": 785.6666666666666}, {"a": "2024-12-18 21:45:00", "b": 780.2}, {"a": "2024-12-18 21:50:00", "b": 782.8}, {"a": "2024-12-18 21:55:00", "b": 799.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    