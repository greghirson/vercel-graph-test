
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-19 20:10:00", "b": 606.3333333333334}, {"a": "2024-10-19 20:15:00", "b": 605.0}, {"a": "2024-10-19 20:20:00", "b": 592.0}, {"a": "2024-10-19 20:25:00", "b": 603.2}, {"a": "2024-10-19 20:30:00", "b": 613.8}, {"a": "2024-10-19 20:35:00", "b": 609.2}, {"a": "2024-10-19 20:40:00", "b": 613.4}, {"a": "2024-10-19 20:45:00", "b": 607.5}, {"a": "2024-10-19 20:50:00", "b": 598.4}, {"a": "2024-10-19 20:55:00", "b": 598.75}, {"a": "2024-10-19 21:00:00", "b": 602.25}, {"a": "2024-10-19 21:05:00", "b": 611.5}, {"a": "2024-10-19 21:10:00", "b": 606.75}, {"a": "2024-10-19 21:15:00", "b": 597.5}, {"a": "2024-10-19 21:20:00", "b": 595.75}, {"a": "2024-10-19 21:25:00", "b": 598.75}, {"a": "2024-10-19 21:30:00", "b": 597.5}, {"a": "2024-10-19 21:35:00", "b": 593.8}, {"a": "2024-10-19 21:40:00", "b": 592.6}, {"a": "2024-10-19 21:45:00", "b": 594.25}, {"a": "2024-10-19 21:50:00", "b": 603.0}, {"a": "2024-10-19 21:55:00", "b": 595.4}, {"a": "2024-10-19 22:00:00", "b": 590.6}, {"a": "2024-10-19 22:05:00", "b": 596.8}, {"a": "2024-10-19 22:10:00", "b": 598.8}, {"a": "2024-10-19 22:15:00", "b": 616.8}, {"a": "2024-10-19 22:20:00", "b": 604.0}, {"a": "2024-10-19 22:25:00", "b": 584.5}, {"a": "2024-10-19 22:30:00", "b": 589.6}, {"a": "2024-10-19 22:35:00", "b": 584.5}, {"a": "2024-10-19 22:40:00", "b": 591.4}, {"a": "2024-10-19 22:45:00", "b": 585.8}, {"a": "2024-10-19 22:50:00", "b": 590.6}, {"a": "2024-10-19 22:55:00", "b": 597.5}, {"a": "2024-10-19 23:00:00", "b": 600.8}, {"a": "2024-10-19 23:05:00", "b": 590.6}, {"a": "2024-10-19 23:10:00", "b": 597.2}, {"a": "2024-10-19 23:15:00", "b": 595.5}, {"a": "2024-10-19 23:20:00", "b": 591.4}, {"a": "2024-10-19 23:25:00", "b": 593.75}, {"a": "2024-10-19 23:30:00", "b": 597.6}, {"a": "2024-10-19 23:35:00", "b": 590.3333333333334}, {"a": "2024-10-19 23:40:00", "b": 594.2}, {"a": "2024-10-19 23:45:00", "b": 596.0}, {"a": "2024-10-19 23:50:00", "b": 617.6}, {"a": "2024-10-19 23:55:00", "b": 696.8}, {"a": "2024-10-20 00:00:00", "b": 772.2}, {"a": "2024-10-20 00:05:00", "b": 813.2}, {"a": "2024-10-20 00:10:00", "b": 830.5}, {"a": "2024-10-20 00:15:00", "b": 836.6666666666666}, {"a": "2024-10-20 00:20:00", "b": 832.2}, {"a": "2024-10-20 00:25:00", "b": 844.2}, {"a": "2024-10-20 00:30:00", "b": 850.6}, {"a": "2024-10-20 00:35:00", "b": 839.2}, {"a": "2024-10-20 00:40:00", "b": 837.0}, {"a": "2024-10-20 00:45:00", "b": 840.6}, {"a": "2024-10-20 00:50:00", "b": 846.4}, {"a": "2024-10-20 00:55:00", "b": 851.25}, {"a": "2024-10-20 01:00:00", "b": 848.6}, {"a": "2024-10-20 01:05:00", "b": 851.2}, {"a": "2024-10-20 01:10:00", "b": 839.0}, {"a": "2024-10-20 01:15:00", "b": 861.0}, {"a": "2024-10-20 01:20:00", "b": 879.6}, {"a": "2024-10-20 01:25:00", "b": 1125.4}, {"a": "2024-10-20 01:30:00", "b": 1498.0}, {"a": "2024-10-20 01:35:00", "b": 1013.4}, {"a": "2024-10-20 01:40:00", "b": 1058.6}, {"a": "2024-10-20 01:45:00", "b": 1046.2}, {"a": "2024-10-20 01:50:00", "b": 1385.6}, {"a": "2024-10-20 01:55:00", "b": 1401.4}, {"a": "2024-10-20 02:00:00", "b": 1162.6}, {"a": "2024-10-20 02:05:00", "b": 1037.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    