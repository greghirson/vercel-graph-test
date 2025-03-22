
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-22 03:00:00", "b": 645.4}, {"a": "2025-03-22 03:05:00", "b": 634.8}, {"a": "2025-03-22 03:10:00", "b": 648.0}, {"a": "2025-03-22 03:15:00", "b": 673.5}, {"a": "2025-03-22 03:20:00", "b": 665.6}, {"a": "2025-03-22 03:25:00", "b": 659.5}, {"a": "2025-03-22 03:30:00", "b": 655.75}, {"a": "2025-03-22 03:35:00", "b": 663.2}, {"a": "2025-03-22 03:40:00", "b": 666.2}, {"a": "2025-03-22 03:45:00", "b": 658.25}, {"a": "2025-03-22 03:50:00", "b": 654.8}, {"a": "2025-03-22 03:55:00", "b": 666.0}, {"a": "2025-03-22 04:00:00", "b": 673.0}, {"a": "2025-03-22 04:05:00", "b": 660.8}, {"a": "2025-03-22 04:10:00", "b": 643.25}, {"a": "2025-03-22 04:15:00", "b": 639.75}, {"a": "2025-03-22 04:20:00", "b": 637.4}, {"a": "2025-03-22 04:25:00", "b": 629.8}, {"a": "2025-03-22 04:30:00", "b": 626.6}, {"a": "2025-03-22 04:35:00", "b": 636.2}, {"a": "2025-03-22 04:40:00", "b": 647.5}, {"a": "2025-03-22 04:45:00", "b": 643.0}, {"a": "2025-03-22 04:50:00", "b": 660.6}, {"a": "2025-03-22 04:55:00", "b": 651.8}, {"a": "2025-03-22 05:00:00", "b": 642.0}, {"a": "2025-03-22 05:05:00", "b": 655.5}, {"a": "2025-03-22 05:10:00", "b": 636.8}, {"a": "2025-03-22 05:15:00", "b": 642.8}, {"a": "2025-03-22 05:20:00", "b": 660.5}, {"a": "2025-03-22 05:25:00", "b": 662.4}, {"a": "2025-03-22 05:30:00", "b": 664.25}, {"a": "2025-03-22 05:35:00", "b": 612.0}, {"a": "2025-03-22 05:40:00", "b": 601.5}, {"a": "2025-03-22 05:45:00", "b": 608.6}, {"a": "2025-03-22 05:50:00", "b": 629.0}, {"a": "2025-03-22 05:55:00", "b": 645.5}, {"a": "2025-03-22 06:00:00", "b": 646.0}, {"a": "2025-03-22 06:05:00", "b": 682.4}, {"a": "2025-03-22 06:10:00", "b": 716.8}, {"a": "2025-03-22 06:15:00", "b": 677.0}, {"a": "2025-03-22 06:20:00", "b": 639.4}, {"a": "2025-03-22 06:25:00", "b": 622.6}, {"a": "2025-03-22 06:30:00", "b": 607.75}, {"a": "2025-03-22 06:35:00", "b": 611.0}, {"a": "2025-03-22 06:40:00", "b": 603.25}, {"a": "2025-03-22 06:45:00", "b": 608.4}, {"a": "2025-03-22 06:50:00", "b": 606.6}, {"a": "2025-03-22 06:55:00", "b": 604.4}, {"a": "2025-03-22 07:00:00", "b": 611.0}, {"a": "2025-03-22 07:05:00", "b": 623.6}, {"a": "2025-03-22 07:10:00", "b": 623.8}, {"a": "2025-03-22 07:15:00", "b": 625.75}, {"a": "2025-03-22 07:20:00", "b": 634.0}, {"a": "2025-03-22 07:25:00", "b": 627.0}, {"a": "2025-03-22 07:30:00", "b": 629.2}, {"a": "2025-03-22 07:35:00", "b": 632.6666666666666}, {"a": "2025-03-22 07:40:00", "b": 651.6}, {"a": "2025-03-22 07:45:00", "b": 649.3333333333334}, {"a": "2025-03-22 07:50:00", "b": 659.0}, {"a": "2025-03-22 07:55:00", "b": 663.0}, {"a": "2025-03-22 08:00:00", "b": 668.25}, {"a": "2025-03-22 08:05:00", "b": 669.8}, {"a": "2025-03-22 08:10:00", "b": 670.8}, {"a": "2025-03-22 08:15:00", "b": 675.0}, {"a": "2025-03-22 08:20:00", "b": 674.25}, {"a": "2025-03-22 08:25:00", "b": 668.6}, {"a": "2025-03-22 08:30:00", "b": 669.5}, {"a": "2025-03-22 08:35:00", "b": 683.8}, {"a": "2025-03-22 08:40:00", "b": 690.8}, {"a": "2025-03-22 08:45:00", "b": 685.6666666666666}, {"a": "2025-03-22 08:50:00", "b": 678.0}, {"a": "2025-03-22 08:55:00", "b": 677.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    