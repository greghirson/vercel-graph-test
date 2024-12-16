
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-16 00:00:00", "b": 845.6}, {"a": "2024-12-16 00:05:00", "b": 817.0}, {"a": "2024-12-16 00:10:00", "b": 786.2}, {"a": "2024-12-16 00:15:00", "b": 788.2}, {"a": "2024-12-16 00:20:00", "b": 770.6}, {"a": "2024-12-16 00:25:00", "b": 744.0}, {"a": "2024-12-16 00:30:00", "b": 734.4}, {"a": "2024-12-16 00:35:00", "b": 744.0}, {"a": "2024-12-16 00:40:00", "b": 733.6}, {"a": "2024-12-16 00:45:00", "b": 731.0}, {"a": "2024-12-16 00:50:00", "b": 737.75}, {"a": "2024-12-16 00:55:00", "b": 742.4}, {"a": "2024-12-16 01:00:00", "b": 748.3333333333334}, {"a": "2024-12-16 01:05:00", "b": 729.8}, {"a": "2024-12-16 01:10:00", "b": 696.2}, {"a": "2024-12-16 01:15:00", "b": 698.5}, {"a": "2024-12-16 01:20:00", "b": 701.4}, {"a": "2024-12-16 01:25:00", "b": 688.4}, {"a": "2024-12-16 01:30:00", "b": 691.8}, {"a": "2024-12-16 01:35:00", "b": 687.4}, {"a": "2024-12-16 01:40:00", "b": 679.8}, {"a": "2024-12-16 01:45:00", "b": 677.8}, {"a": "2024-12-16 01:50:00", "b": 677.0}, {"a": "2024-12-16 01:55:00", "b": 679.0}, {"a": "2024-12-16 02:00:00", "b": 668.4}, {"a": "2024-12-16 02:05:00", "b": 665.0}, {"a": "2024-12-16 02:10:00", "b": 664.5}, {"a": "2024-12-16 02:15:00", "b": 658.6}, {"a": "2024-12-16 02:20:00", "b": 660.75}, {"a": "2024-12-16 02:25:00", "b": 672.4}, {"a": "2024-12-16 02:30:00", "b": 672.75}, {"a": "2024-12-16 02:35:00", "b": 669.75}, {"a": "2024-12-16 02:40:00", "b": 656.3333333333334}, {"a": "2024-12-16 02:45:00", "b": 658.75}, {"a": "2024-12-16 02:50:00", "b": 656.5}, {"a": "2024-12-16 02:55:00", "b": 658.2}, {"a": "2024-12-16 03:00:00", "b": 641.6}, {"a": "2024-12-16 03:05:00", "b": 631.2}, {"a": "2024-12-16 03:10:00", "b": 603.2}, {"a": "2024-12-16 03:15:00", "b": 590.25}, {"a": "2024-12-16 03:20:00", "b": 591.0}, {"a": "2024-12-16 03:25:00", "b": 587.0}, {"a": "2024-12-16 03:30:00", "b": 578.6}, {"a": "2024-12-16 03:35:00", "b": 585.8}, {"a": "2024-12-16 03:40:00", "b": 591.75}, {"a": "2024-12-16 03:45:00", "b": 584.6}, {"a": "2024-12-16 03:50:00", "b": 582.2}, {"a": "2024-12-16 03:55:00", "b": 581.75}, {"a": "2024-12-16 04:00:00", "b": 578.8}, {"a": "2024-12-16 04:05:00", "b": 583.4}, {"a": "2024-12-16 04:10:00", "b": 580.5}, {"a": "2024-12-16 04:15:00", "b": 579.8}, {"a": "2024-12-16 04:20:00", "b": 573.3333333333334}, {"a": "2024-12-16 04:25:00", "b": 562.8}, {"a": "2024-12-16 04:30:00", "b": 568.75}, {"a": "2024-12-16 04:35:00", "b": 575.6}, {"a": "2024-12-16 04:40:00", "b": 573.0}, {"a": "2024-12-16 04:45:00", "b": 562.0}, {"a": "2024-12-16 04:50:00", "b": 559.6}, {"a": "2024-12-16 04:55:00", "b": 571.6}, {"a": "2024-12-16 05:00:00", "b": 564.4}, {"a": "2024-12-16 05:05:00", "b": 559.25}, {"a": "2024-12-16 05:10:00", "b": 558.2}, {"a": "2024-12-16 05:15:00", "b": 558.4}, {"a": "2024-12-16 05:20:00", "b": 562.6}, {"a": "2024-12-16 05:25:00", "b": 552.25}, {"a": "2024-12-16 05:30:00", "b": 554.4}, {"a": "2024-12-16 05:35:00", "b": 543.2}, {"a": "2024-12-16 05:40:00", "b": 538.25}, {"a": "2024-12-16 05:45:00", "b": 543.6}, {"a": "2024-12-16 05:50:00", "b": 540.8}, {"a": "2024-12-16 05:55:00", "b": 547.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    