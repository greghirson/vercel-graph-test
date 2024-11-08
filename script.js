
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-07 23:50:00", "b": 762.75}, {"a": "2024-11-07 23:55:00", "b": 757.4}, {"a": "2024-11-08 00:00:00", "b": 740.0}, {"a": "2024-11-08 00:05:00", "b": 709.0}, {"a": "2024-11-08 00:10:00", "b": 694.8}, {"a": "2024-11-08 00:15:00", "b": 684.6}, {"a": "2024-11-08 00:20:00", "b": 671.0}, {"a": "2024-11-08 00:25:00", "b": 667.5}, {"a": "2024-11-08 00:30:00", "b": 654.5}, {"a": "2024-11-08 00:35:00", "b": 639.6}, {"a": "2024-11-08 00:40:00", "b": 629.2}, {"a": "2024-11-08 00:45:00", "b": 626.0}, {"a": "2024-11-08 00:50:00", "b": 629.2}, {"a": "2024-11-08 00:55:00", "b": 621.8}, {"a": "2024-11-08 01:00:00", "b": 611.75}, {"a": "2024-11-08 01:05:00", "b": 611.0}, {"a": "2024-11-08 01:10:00", "b": 613.4}, {"a": "2024-11-08 01:15:00", "b": 597.2}, {"a": "2024-11-08 01:20:00", "b": 577.8}, {"a": "2024-11-08 01:25:00", "b": 581.2}, {"a": "2024-11-08 01:30:00", "b": 575.5}, {"a": "2024-11-08 01:35:00", "b": 564.4}, {"a": "2024-11-08 01:40:00", "b": 561.8}, {"a": "2024-11-08 01:45:00", "b": 577.5}, {"a": "2024-11-08 01:50:00", "b": 576.6}, {"a": "2024-11-08 01:55:00", "b": 576.0}, {"a": "2024-11-08 02:00:00", "b": 579.25}, {"a": "2024-11-08 02:05:00", "b": 585.0}, {"a": "2024-11-08 02:10:00", "b": 586.0}, {"a": "2024-11-08 02:15:00", "b": 580.5}, {"a": "2024-11-08 02:20:00", "b": 589.4}, {"a": "2024-11-08 02:25:00", "b": 592.0}, {"a": "2024-11-08 02:30:00", "b": 577.2}, {"a": "2024-11-08 02:35:00", "b": 589.0}, {"a": "2024-11-08 02:40:00", "b": 594.0}, {"a": "2024-11-08 02:45:00", "b": 590.0}, {"a": "2024-11-08 02:50:00", "b": 594.75}, {"a": "2024-11-08 02:55:00", "b": 575.0}, {"a": "2024-11-08 03:00:00", "b": 572.0}, {"a": "2024-11-08 03:05:00", "b": 578.6}, {"a": "2024-11-08 03:10:00", "b": 575.3333333333334}, {"a": "2024-11-08 03:15:00", "b": 578.75}, {"a": "2024-11-08 03:20:00", "b": 573.8}, {"a": "2024-11-08 03:25:00", "b": 579.8}, {"a": "2024-11-08 03:30:00", "b": 572.6}, {"a": "2024-11-08 03:35:00", "b": 567.25}, {"a": "2024-11-08 03:40:00", "b": 569.0}, {"a": "2024-11-08 03:45:00", "b": 571.4}, {"a": "2024-11-08 03:50:00", "b": 579.0}, {"a": "2024-11-08 03:55:00", "b": 588.4}, {"a": "2024-11-08 04:00:00", "b": 608.2}, {"a": "2024-11-08 04:05:00", "b": 626.2}, {"a": "2024-11-08 04:10:00", "b": 636.75}, {"a": "2024-11-08 04:15:00", "b": 636.0}, {"a": "2024-11-08 04:20:00", "b": 631.8}, {"a": "2024-11-08 04:25:00", "b": 635.0}, {"a": "2024-11-08 04:30:00", "b": 618.75}, {"a": "2024-11-08 04:35:00", "b": 609.8}, {"a": "2024-11-08 04:40:00", "b": 610.4}, {"a": "2024-11-08 04:45:00", "b": 608.25}, {"a": "2024-11-08 04:50:00", "b": 635.25}, {"a": "2024-11-08 04:55:00", "b": 628.8}, {"a": "2024-11-08 05:00:00", "b": 626.0}, {"a": "2024-11-08 05:05:00", "b": 620.2}, {"a": "2024-11-08 05:10:00", "b": 619.5}, {"a": "2024-11-08 05:15:00", "b": 625.4}, {"a": "2024-11-08 05:20:00", "b": 629.0}, {"a": "2024-11-08 05:25:00", "b": 620.0}, {"a": "2024-11-08 05:30:00", "b": 614.0}, {"a": "2024-11-08 05:35:00", "b": 610.2}, {"a": "2024-11-08 05:40:00", "b": 608.5}, {"a": "2024-11-08 05:45:00", "b": 603.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    